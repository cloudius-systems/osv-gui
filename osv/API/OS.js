var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.OS = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    GraphAPI = OSv.API.GraphAPI,
    ThreadsGraphAPI = OSv.API.ThreadsGraphAPI,
    freeMemoryGraph = new GraphAPI("os/memory/free"),
    totalMemoryGraph = new GraphAPI("os/memory/total"),
    threadsGraph;

  threadsGraph = new ThreadsGraphAPI(); 

  return { 
    version: apiGETCall("os/version"),
    manufactor: apiGETCall("os/manufactor"),
    uptime: apiGETCall("os/uptime"),
    date: apiGETCall("os/date"),
    Memory: {
      total: apiGETCall("os/memory/total"),
      free: apiGETCall("os/memory/free"),
      History: {
        total: totalMemoryGraph.getData.bind(totalMemoryGraph),
        free: freeMemoryGraph.getData.bind(freeMemoryGraph)
      }
    },
    shutdown: apiPOSTCall("os/shutdown"),
    dmesg: apiGETCall("os/dmesg"),
    getHostname: apiGETCall("os/hostname"),
    setHostname: apiPOSTCall("os/hostname"),
    threads: apiGETCall("os/threads"),
    threadsGraph: threadsGraph.getData.bind(threadsGraph),
    CPUAverage: threadsGraph.getCpuAvergae.bind(threadsGraph),
    CPU: threadsGraph.getCpu.bind(threadsGraph)
  };

}());
OSv.API.OS.getHostname().then(function (res) { console.log(res) })
OSv.API.OS.version().then(function (res) { console.log(res) })
OSv.API.OS.date().then(function (res) { console.log(res) })
OSv.API.OS.manufactor().then(function (res) { console.log(res) })