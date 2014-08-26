var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.ThreadsTimeline = (function() {

  function ThreadsTimeline() {
  }

  ThreadsTimeline.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  ThreadsTimeline.prototype.template = "/osv/templates/boxes/EmptyBox.html";


  ThreadsTimeline.prototype.fetchData = function () {
    return OSv.API.OS.threadsGraph().then(function (res) {
      return $.map(res, function(thread) {
        return thread;
      }).filter(function (thread) {
        return ids.indexOf( thread.id ) != -1;
      }).map(function (thread) {
        thread.statusTimeline = thread.statusTimeline.slice(-10);
        return thread;
      });

    })
  };

  ThreadsTimeline.prototype.refresh = function(ids) {
  };

  return ThreadsTimeline;

}());
