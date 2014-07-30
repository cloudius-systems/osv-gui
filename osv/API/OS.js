var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.OS = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    GraphAPI = OSv.API.GraphAPI,
    freeMemoryGraph = new GraphAPI("/os/memory/free"),
    totalMemoryGraph = new GraphAPI("/os/memory/total"),
    cpuGraph,
    threadsGraph;

  cpuGraph = new GraphAPI("/os/threads", function(threads) {
    var idle = threads.list.filter(function(thread) { 
      return thread.name == "idle1" 
    })[0];

    if(this.data.length !== 0)
      console.log(idle.cpu_ms - this.data[ this.data.length - 1][1])
    return [ Date.now(), idle.cpu_ms ];
  });


  threadsGraph = new GraphAPI("/os/threads", function (threads) {
    return threads.list
    .sort(function (thread1, thread2) {
      return thread1.cpu_ms > thread2.cpu_ms ? -1 : 1;
    })
    .map(function (thread) {
        return [ Date.now(), thread.cpu_ms]
    })
    .slice(0, 9)
  });

  return { 
    version: apiGETCall("/os/version"),
    manufactor: apiGETCall("/os/manufactor"),
    uptime: apiGETCall("/os/uptime"),
    date: apiGETCall("/os/date"),
    Memory: {
      total: apiGETCall("/os/memory/total"),
      free: apiGETCall("/os/memory/free"),
      History: {
        total: totalMemoryGraph.getData.bind(totalMemoryGraph),
        free: freeMemoryGraph.getData.bind(freeMemoryGraph)
      }
    },
    shutdown: apiPOSTCall("/os/shutdown"),
    dmesg: apiGETCall("/os/dmesg"),
    getHostname: apiGETCall("/os/hostname"),
    setHostname: apiPOSTCall("/os/hostname"),
    threads: apiGETCall("/os/threads"),
    threadsGraph: threadsGraph.getData.bind(threadsGraph),
    cpu: cpuGraph.getData.bind(cpuGraph)
  };

}());
