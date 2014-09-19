var OSv = OSv || {};
OSv.Layouts = OSv.Layouts || {};

OSv.Layouts.ThreadsLayout = (function() {
  
  var Boxes = OSv.Boxes;

  function ThreadsLayout() {
    var self = this;
    OSv.Layouts.BoxesLayout.apply(this, arguments);
    this.setSelectedThreads();
    this.threadsGraph = new Boxes.ThreadsGraph();
    this.threadsTimeline = new Boxes.ThreadsTimeline();
    this.threadsTablebox = new Boxes.ThreadsTableBox();
    this.boxes = [ this.threadsGraph, this.threadsTablebox, this.threadsTimeline ]

    $(document).on("click", ".thread .toggleThread", this.onToggleThreadClick.bind(this))
  }


  ThreadsLayout.prototype = new OSv.Layouts.BoxesLayout();
  
  ThreadsLayout.prototype.preRender = function() {
    this.getLayoutContainer().append(
      '<div class="row" style="height: inherit;">' +
                '<div id="profiler" class="roundedContainer col-lg-12">' +
                  '<div class="col-xs-8" id="left"></div>' +
                '</div>' +
      '</div>'
    );
    this.layoutContainerID = "profiler";
  };
  ThreadsLayout.prototype.setSelectedThreads = function () {
    var self = this;
    return OSv.API.OS.threads().then(function (threads) {
      self.threadsGraph.visibleThreads = threads.list.sort(function (thread1, thread2) {
        return thread1.cpu_ms > thread2.cpu_ms ? -1 : 1;
      }).map(function (thread) { 
        return thread.id|0;
      }).slice(0, 9);
    })
  }

  ThreadsLayout.prototype.render = function () {
    var self = this;
    OSv.Layouts.BoxesLayout.prototype.render.call(this, arguments);
    this.refreshTable();
    this.refreshTimeline();
    this.interval = setInterval(function () {
      self.refreshTable();
      self.refreshTimeline();
    }, 2000);
  }
  ThreadsLayout.prototype.clear = function() {
    OSv.Layouts.BoxesLayout.prototype.clear.apply(this, arguments);
    clearInterval(this.interval)
  };

  ThreadsLayout.prototype.getSelectedThreads = function() {
    return this.threadsGraph.visibleThreads;
  };

  ThreadsLayout.prototype.showThread = function(threadID) {
    this.threadsGraph.visibleThreads.push(threadID|0);
    this.threadsTablebox.select(threadID);
  };

  ThreadsLayout.prototype.hideThread = function(threadID) {
    this.threadsTablebox.unselect(threadID);
    this.threadsGraph.visibleThreads = this.threadsGraph.visibleThreads.filter(function (thread) { 
      return thread != threadID
    });
  };

  ThreadsLayout.prototype.refreshTimeline = function() {
    this.threadsTimeline.refresh(this.getSelectedThreads());
  }
  ThreadsLayout.prototype.refreshTable = function() {
    var visibleThreads = this.threadsGraph.visibleThreads;
    this.threadsTablebox.refresh(this.getSelectedThreads());
  };

  ThreadsLayout.prototype.refreshGraph = function() {
    this.threadsGraph.renderGraph(false, false)
  };
  
  ThreadsLayout.prototype.onToggleThreadClick = function(event) {
    var $checkbox = $(event.target).parent("[data-thread]"),
      threadID = $checkbox.attr("data-thread-id")|0;

    if ( $checkbox.is(".checked") ) {
      this.hideThread(threadID);
    } else {
      this.showThread(threadID);
    }
    this.refreshGraph();
    this.refreshTimeline();
    return false;
  };

  return ThreadsLayout;

}());
