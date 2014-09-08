var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.JVM = (function() {

  var apiGETCall = helpers.apiGETCall,
    version = apiGETCall("/jvm/version");


    GCGraphAPI.prototype = Object.create( OSv.API.GraphAPI.prototype );
    function GCGraphAPI () {
      this.startPulling();
    };

    GCGraphAPI.prototype.path = "/jvm/memory/gc";
    GCGraphAPI.prototype.data = [];
    GCGraphAPI.prototype.labels = [];
    GCGraphAPI.prototype.memoryManagers = [];
    GCGraphAPI.prototype.formatResponse = function(res) {
      var self = this,
        timestamp = Date.now();

      res.forEach(function (mm, idx) {
        if (!self.memoryManagers[ idx ]) {
          self.memoryManagers[ idx ] = [];
          self.labels[ idx ] = mm.name;
        }
        self.memoryManagers[ idx ].push([ timestamp, mm.count ])
        return mm;
      })
      
      return res;
    };

    GCGraphAPI.prototype.getData = function () {
      return this.memoryManagers.map(function (plot) {
        return plot.slice(-9);
      });
    };


    MemoryPoolGraph.prototype = Object.create( OSv.API.GraphAPI.prototype );
    function MemoryPoolGraph () {
      this.startPulling();
    }

    MemoryPoolGraph.prototype.path = "/jolokia/read/java.lang:type=MemoryPool,name=*?ignoreErrors=true";
    MemoryPoolGraph.prototype.labels = [];
    MemoryPoolGraph.prototype.pools = [];
    MemoryPoolGraph.prototype.data = [];

    MemoryPoolGraph.prototype.formatResponse = function (res) {
      var self = this;
      var idx = 0;
      $.map(res.value, function (pool, name) {
        self.labels[idx] = pool.Name;
        if (!self.pools[idx]) self.pools[idx] = [];
        self.pools[idx].push([ res.timestamp, pool.Usage.committed]);
        idx += 1;
      })
      return res;
    };


    MemoryPoolGraph.prototype.getData = function () {
      return this.pools.map(function (plot) { return plot.slice(-9); });
    };

    var HeapMemoryUsed = function () {
      return apiGETCall("/jolokia/read%2Fjava.lang%3Atype%3DMemory%2FHeapMemoryUsage%2Fused")().then(function (res) {
        return res.value;
      })
    };

    var HeapMemoryUsageGraph = new OSv.API.GraphAPI("/jolokia/read/java.lang:type=Memory/HeapMemoryUsage/used", function (res) {
      var point = [res.timestamp * 1000, res.value / Math.pow(1024, 2) ]
      return point;
    },
    function () {
      if (this.data.length && isNaN(this.data[0][1])) this.data.shift();
      return this.data.slice(-9);
    });

    var classesCount = function () {
      return apiGETCall("/jolokia/read/java.lang:type=ClassLoading")().then(function (res) {
        return res.value.TotalLoadedClassCount;
      })
    };
    
    var threadsCount = function () {
      return apiGETCall("/jolokia/read/java.lang:type=Threading/ThreadCount")().then(function (res) {
        return res.value;
      })
    };

    exists = apiGETCall("/jvm/version");

  return { 
    version: version,
    MemoryPoolGraph: new MemoryPoolGraph(),
    HeapMemoryUsageGraph: HeapMemoryUsageGraph,
    GCGraphAPI: new GCGraphAPI(),
    HeapMemoryUsed: HeapMemoryUsed,
    classesCount: classesCount,
    threadsCount: threadsCount
  };

}());
