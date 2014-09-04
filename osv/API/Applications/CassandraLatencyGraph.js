var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraLatencyGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraLatencyGraph() {
    var self = this;
    OSv.API.Applications.Cassandra.ifIsRunning().then(function (isRunning) {
      if (isRunning) self.startPulling();
    });
  }

  CassandraLatencyGraph.prototype.range = [];
  
  CassandraLatencyGraph.prototype.read = [];
  
  CassandraLatencyGraph.prototype.write = [];

  CassandraLatencyGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentRangeLatencyMicros"),
      Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentReadLatencyMicros"),
      Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentWriteLatencyMicros")
    ).then(function (range, read, write) {
      var timestamp = Date.now();
      self.range.push([timestamp, range])
      self.read.push([timestamp, read])
      self.write.push([timestamp, write])
    })
  };

  CassandraLatencyGraph.prototype.getData = function() {
    return [
      (this.range.length > 0? this.range : [[]]).slice(-9),
      (this.read.length > 0? this.read : [[]]).slice(-9),
      (this.write.length > 0? this.write : [[]]).slice(-9),
    ]
  }
  CassandraLatencyGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 2000);
  };

  var singleton = new CassandraLatencyGraph();
  
  return singleton;
}());
