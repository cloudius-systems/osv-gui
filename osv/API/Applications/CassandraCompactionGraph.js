var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraCompactionGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraCompactionGraph() {
    OSv.API.Applications.Cassandra.ifIsRunning().then(this.startPulling.bind(this));
  }

  CassandraCompactionGraph.prototype.bytesCompacted = [];
  
  CassandraCompactionGraph.prototype.bytesTotalInProgress = [];

  CassandraCompactionGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.metrics:name=BytesCompacted,type=Compaction"),
      Jolokia.read("org.apache.cassandra.metrics:name=TotalCompactionsCompleted,type=Compaction")
    ).then(function (bytesCompacted, bytesTotalInProgress) {
      var timestamp = Date.now();
      self.bytesCompacted.push([timestamp, bytesCompacted.Count])
      self.bytesTotalInProgress.push([timestamp, bytesTotalInProgress.Count])
    })
  };

  CassandraCompactionGraph.prototype.safePlot = function (plot) {
    return (plot.length > 0 ? plot : [[]]).slice(-9);
  };

  CassandraCompactionGraph.prototype.getData = function() {
    return [
      this.safePlot(this.bytesCompacted),
      this.safePlot(this.bytesTotalInProgress)
    ]
  }
  
  CassandraCompactionGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 2000);
  };

  var singleton = new CassandraCompactionGraph();
  
  return singleton;
}());
