var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.OS = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    GraphAPI = OSv.API.GraphAPI,
    freeMemoryGraph = new GraphAPI("/os/memory/free"),
    totalMemoryGraph = new GraphAPI("/os/memory/total"),
    cpuGraph;

  cpuGraph = new GraphAPI("/os/threads", function(response) {
    var threads = JSON.parse(response);
    var idle = threads.list.filter(function(thread) { 
      return thread.name == "idle1" 
    })[0];

    if(this.data.length !== 0)
      console.log(idle.cpu_ms - this.data[ this.data.length - 1][1])
    return [ Date.now(), idle.cpu_ms ];
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
    cpu: cpuGraph.getData.bind(cpuGraph)
  };

}());
