var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraOperationsGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraOperationsGraph() {
    var self = this;
    OSv.API.Applications.Cassandra.ifIsRunning().then(function (isRunning) {
      if (isRunning) self.startPulling();
    });
  }

  CassandraOperationsGraph.prototype.readsActiveCount = [];
  CassandraOperationsGraph.prototype.readsCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.readsCompletedTasks = [];

  CassandraOperationsGraph.prototype.writesActiveCount = [];
  CassandraOperationsGraph.prototype.writesCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.writesCompletedTasks = [];
  
  CassandraOperationsGraph.prototype.gossipActiveCount = [];
  CassandraOperationsGraph.prototype.gossipCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.gossipCompletedTasks = [];
  


  CassandraOperationsGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.request:type=ReadStage"),
      Jolokia.read("org.apache.cassandra.request:type=MutationStage"),
      Jolokia.read("org.apache.cassandra.internal:type=GossipStage")
    ).then(function (read, write, gossip) {
      self.readsActiveCount.push([read.timestamp, read.value.ActiveCount]);

      if (self.readsCompletedTasksLastRead == null) {
        self.readsCompletedTasks.push([read.timestamp, 0]);
      } else {
        self.readsCompletedTasks.push([read.timestamp, read.value.CompletedTasks - self.readsCompletedTasksLastRead]);
      }
      self.readsCompletedTasksLastRead = read.value.CompletedTasks;

      self.writesActiveCount.push([write.timestamp, write.value.ActiveCount])
      
      if (self.readsCompletedTasksLastRead == null) {
        self.writesCompletedTasks.push([write.timestamp, 0]);
      } else {
        self.writesCompletedTasks.push([write.timestamp, write.value.CompletedTasks - self.writesCompletedTasksLastRead]);
      }
      self.writesCompletedTasksLastRead = write.value.CompletedTasks;
      
      self.gossipActiveCount.push([gossip.timestamp, gossip.value.ActiveCount])

      if (self.gossipCompletedTasksLastRead == null) {
        self.gossipCompletedTasks.push([gossip.timestamp, 0])
      } else {
        self.gossipCompletedTasks.push([gossip.timestamp, gossip.value.CompletedTasks - self.gossipCompletedTasksLastRead])
      }
      self.gossipCompletedTasksLastRead  = gossip.value.CompletedTasks;
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
      this.safePlot(this.readsCompletedTasks),
      this.safePlot(this.writesCompletedTasks),
      this.safePlot(this.gossipCompletedTasks)
    ]
  };
  
  var singleton = new CassandraOperationsGraph();
  return singleton;

}());
