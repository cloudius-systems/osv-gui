var OSv = OSv || {};

OSv.API = (function() {

  var BasePath = OSv.Settings.BasePath,
    OS,
    GraphAPI = OSv.API.GraphAPI;
    memoryGraph = {};

  memoryGraph.free = new GraphAPI("/os/memory/free");
  memoryGraph.total = new GraphAPI("/os/memory/total");

  function apiGETCall(path) {
    return function() {
      return $.get(BasePath + path);
    };
  }

  function apiPOSTCall(path) {
    return function(data) {
      return $.post(BasePath + path, data);
    }
  }

  OS = {
    version: apiGETCall("/os/version"),
    manufactor: apiGETCall("/os/manufactor"),
    uptime: apiGETCall("/os/uptime"),
    date: apiGETCall("/os/date"),
    Memory: {
      total: apiGETCall("/os/memory/total"),
      free: apiGETCall("/os/memory/free"),
      History: {
        total: function () { return memoryGraph.total.getData(); },
        free: function () { return memoryGraph.free.getData(); }
      }
    },
    shutdown: apiPOSTCall("/os/shutdown"),
    dmesg: apiGETCall("/os/dmesg"),
    getHostname: apiGETCall("/os/hostname"),
    setHostname: apiPOSTCall("/os/hostname"),
    threads: apiGETCall("/os/threads")

  };

  return {
    OS: OS
  };

}());
