var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Profiler = (function() {
 
  var Boxes = OSv.Boxes;

  function Profiler() {

    var self =this;
    
    $(document).on("click", "[data-tracepoint-name][data-add-trace]", function () {
      self.addTracePoint($(this).attr("data-tracepoint-name"));
    });

    $(document).on("click", "[data-tracepoint-name][data-remove-trace]", function () {
      self.removeTracePoint($(this).attr("data-tracepoint-name"));
    });

    $(document).on("click", ".clearAll", function () {
      self.clearAll();
    });

    $(document).on("keyup", "#filterTracepoints", function () {
      self.filterTracepoints($(this).val());
    });
  }

  Profiler.prototype.clearAll = function() {
    this.tracePointsBox.removeAll();
  };

  Profiler.prototype.filterTracepoints = function(keyword) {
    this.traceListBox.filter(keyword);
  };

  Profiler.prototype.refresh = function() {
    this.tracePointsBox.refresh();
  };

  Profiler.prototype.addTracePoint = function(id) {
    this.tracePointsBox.add(id);
    this.traceListBox.add(id);
  };

  Profiler.prototype.removeTracePoint = function(id) {
    this.tracePointsBox.remove(id);
    this.traceListBox.remove(id);
  };

  Profiler.prototype.setContainer = function() {
    this.getLayoutContainer().append(
      '<div class="row" style="height: inherit;">' +
                '<div id="profiler" class="roundedContainer col-lg-12">' +
                '</div>' +
      '</div>'
    );
    this.layoutContainerID = "profiler";
  };

  Profiler.prototype.handler = function() {
    this.tracePointsBox = new Boxes.TracePoints;
    this.traceListBox = new Boxes.TraceList
    this.layout = new OSv.Layouts.BoxesLayout([
      this.tracePointsBox, this.traceListBox
    ]);
    this.layout.preRender = this.setContainer.bind(this.layout);
    this.layout.render();
  };

  return Profiler;
}());
