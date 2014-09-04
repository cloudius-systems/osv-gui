var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraOperationsGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraOperationsGraph() {
    this.startPulling();
  }

  CassandraOperationsGraph.prototype.readsActiveCount = [];
  
  CassandraOperationsGraph.prototype.readsCompletedTasks = [];

  CassandraOperationsGraph.prototype.writesActiveCount = [];
  
  CassandraOperationsGraph.prototype.writesCompletedTasks = [];
  
  CassandraOperationsGraph.prototype.gossipActiveCount = [];
  
  CassandraOperationsGraph.prototype.gossipCompletedTasks = [];

  CassandraOperationsGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.request:type=ReadStage"),
      Jolokia.read("org.apache.cassandra.request:type=MutationStage"),
      Jolokia.read("org.apache.cassandra.internal:type=GossipStage")
    ).then(function (read, write, gossip) {
      var timestamp = Date.now();
      
      self.readsActiveCount.push([timestamp, read.ActiveCount]);
      self.readsCompletedTasks.push([timestamp, read.CompletedTasks]);
      
      self.writesActiveCount.push([timestamp, write.ActiveCount])
      self.writesCompletedTasks.push([timestamp, write.CompletedTasks])
      
      self.gossipActiveCount.push([timestamp, gossip.ActiveCount])
      self.gossipCompletedTasks.push([timestamp, gossip.CompletedTasks])
    })
  };

  CassandraOperationsGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 2000);
  };

  CassandraOperationsGraph.prototype.safePlot = function (plot) {
    return (plot.length > 0 ? plot : [[]]).slice(-9);
  }
  CassandraOperationsGraph.prototype.getData = function () {
    return [
      this.safePlot(this.readsActiveCount),
      this.safePlot(this.readsCompletedTasks),
      this.safePlot(this.writesActiveCount),
      this.safePlot(this.writesCompletedTasks),
      this.safePlot(this.gossipActiveCount),
      this.safePlot(this.gossipCompletedTasks)
    ]
  };
  
  var singleton = new CassandraOperationsGraph();
  return singleton;

}());
