var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.ThreadsTableBox = (function() {

  function ThreadsTableBox() {
  }

  ThreadsTableBox.prototype = new OSv.Boxes.StaticBox();

  ThreadsTableBox.prototype.template = "/osv/templates/boxes/ThreadsTable.html";

  ThreadsTableBox.prototype.refresh = function (selected) {
    var self = this;
    this.fetchData().then(function (ctx) {
      ctx.selected = selected;
      var tmpl =  self.getTemplate();
      return tmpl(ctx);
    }).then(function ($html) {
      var boxContaienr = $("#Box0");
      boxContaienr.html($html);
    })
  };

  ThreadsTableBox.prototype.fetchData = function () {
    return OSv.API.OS.threadsGraph().then(function (threads) {
      
      var threads = $.map(threads, function (thread, id) {
        return {
          name: thread.name,
          id: id,
          percent: thread.plot[thread.plot.length - 1][1].toFixed(1)
        }
      }).sort(function(t1, t2) {
        return t1.percent > t2.percent ? -1 : 1;
      })
      
      return { 
          threads: threads, 
          selected: threads.map(function (thread) { return thread.id}).slice(0,9) 
        }
    })
  };

  return ThreadsTableBox;

}());
