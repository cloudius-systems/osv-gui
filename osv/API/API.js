var OSv = OSv || {};

OSv.API = (function() {

  var BasePath = OSv.Settings.BasePath,
    totalMemoryHistory = [],
    freeMemoryHistory = [],
    OS;

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
        total: totalMemoryHistory,
        free: freeMemoryHistory
      }
    },
    shutdown: apiPOSTCall("/os/shutdown"),
    dmesg: apiGETCall("/os/dmesg"),
    getHostname: apiGETCall("/os/hostname"),
    setHostname: apiPOSTCall("/os/hostname"),
    threads: apiGETCall("/os/threads")

  };

  function fetchMemoryStats() {
    $.when(OS.Memory.total(), OS.Memory.free()).then(function(total, free) {
      var time = Date.now();

      totalMemoryHistory.push([
        new Date(time),
        total[0] / Math.pow(1024, 2)
      ]);

      freeMemoryHistory.push([
        new Date(time),
        free[0] / Math.pow(1024, 2)
      ]);

      if (totalMemoryHistory.length > OSv.Settings.Graph.MaxTicks) {
        totalMemoryHistory.shift();
      }
      if (freeMemoryHistory.length > OSv.Settings.Graph.MaxTicks) {
        freeMemoryHistory.shift();
      }

    });

  };

  setInterval(fetchMemoryStats, OSv.Settings.DataFetchingRate);

  return {
    OS: OS
  };

}());
