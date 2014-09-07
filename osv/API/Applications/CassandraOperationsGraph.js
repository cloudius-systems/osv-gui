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

  CassandraOperationsGraph.prototype.readsActiveCount = 0;
  CassandraOperationsGraph.prototype.readsCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.readsCompletedTasks = [];

  CassandraOperationsGraph.prototype.mutationsActiveCount = 0;
  CassandraOperationsGraph.prototype.mutationsCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.mutationsCompletedTasks = [];
  
  CassandraOperationsGraph.prototype.gossipActiveCount = 0;
  CassandraOperationsGraph.prototype.gossipCompletedTasksLastRead = null;
  CassandraOperationsGraph.prototype.gossipCompletedTasks = [];
  


  CassandraOperationsGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.request:type=ReadStage"),
      Jolokia.read("org.apache.cassandra.request:type=MutationStage"),
      Jolokia.read("org.apache.cassandra.internal:type=GossipStage")
    ).then(function (read, mutation, gossip) {
      self.readsActiveCount =  read.value.ActiveCount;
      if (self.readsCompletedTasksLastRead == null) {
        self.readsCompletedTasks.push([read.timestamp, 0]);
      } else {
        self.readsCompletedTasks.push([read.timestamp, read.value.CompletedTasks - self.readsCompletedTasksLastRead]);
      }
      self.readsCompletedTasksLastRead = read.value.CompletedTasks;

      self.mutationsActiveCount = mutation.value.ActiveCount;
      
      if (self.readsCompletedTasksLastRead == null) {
        self.mutationsCompletedTasks.push([mutation.timestamp, 0]);
      } else {
        self.mutationsCompletedTasks.push([mutation.timestamp, mutation.value.CompletedTasks - self.mutationsCompletedTasksLastRead]);
      }
      self.mutationsCompletedTasksLastRead = mutation.value.CompletedTasks;
      
      self.gossipActiveCount =  gossip.value.ActiveCount;

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
      this.safePlot(this.mutationsCompletedTasks),
      this.safePlot(this.gossipCompletedTasks)
    ]
  };
  
  var singleton = new CassandraOperationsGraph();
  return singleton;

}());
