var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.ThreadsGraphAPI = (function() {

  function ThreadsGraphAPI() {
    this.path = "/os/threads";
    this.data = [];
    this.startPulling();
  };
  
  ThreadsGraphAPI.prototype = Object.create(OSv.API.GraphAPI.prototype);

  ThreadsGraphAPI.prototype.formatResponse = function (threads) { 
    return threads.list.map(function (thread) {
      thread.time = Date.now();
      return thread; 
    })
  };

  ThreadsGraphAPI.prototype.getData = function () {
    var self = this; 
    if (!this.threads) this.threads = {};

    this.data.forEach(function (threadList) {

      threadList.forEach(function (thread) {
        var id = thread.id;
        if (!self.threads[id]) {
          self.threads[id] = thread
          self.threads[id].plot = [];
        };
        self.threads[id].plot.push([ thread.time, thread.cpu_ms]);
      })
    })
    return self.threads;
  }

  return ThreadsGraphAPI;

}());
