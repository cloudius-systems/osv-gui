var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.ThreadsTableBox = (function() {

  function ThreadsTableBox() {
  }

  ThreadsTableBox.prototype = new OSv.Boxes.StaticBox();

  ThreadsTableBox.prototype.template = "/osv/templates/boxes/ThreadsTable.html";

  ThreadsTableBox.prototype.fetchData = function () {
    return OSv.API.OS.threads().then(function (threads) {
      return threads.list.sort(function (thread1, thread2) {
        return thread1.cpu_ms > thread2.cpu_ms ? -1 : 1;
      })
    })
  };

  return ThreadsTableBox;

}());
