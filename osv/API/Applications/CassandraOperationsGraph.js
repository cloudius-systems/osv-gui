var Jolokia = require("../Jolokia"),
  CassandraGraph = require("./CassandraGraph"),
  Cassandra = require("./Cassandra"),
  apiGETCall = require("../../helpers").apiGETCall;


function CassandraOperationsGraph() {
  var self = this;
  Cassandra.ifIsRunning().then(function (isRunning) {
    if (isRunning) self.startPulling();
  });
}

CassandraOperationsGraph.prototype = Object.create(CassandraGraph.prototype);

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
  if (window.globalPause) return;
  $.when(
    Jolokia.read("org.apache.cassandra.request:type=ReadStage"),
    Jolokia.read("org.apache.cassandra.request:type=MutationStage"),
    Jolokia.read("org.apache.cassandra.internal:type=GossipStage")
  ).then(function (read, mutation, gossip) {

    self.readsActiveCount =  read.value.ActiveCount;
    if (self.readsCompletedTasksLastRead == null) {
      self.readsCompletedTasks.push([read.timestamp, 0]);
    } else {
      self.readsCompletedTasks.push([
        read.timestamp, 
        (read.value.CompletedTasks - self.readsCompletedTasksLastRead[1]) / (read.timestamp - self.readsCompletedTasksLastRead[0])
        ]);
    }
    self.readsCompletedTasksLastRead = [read.timestamp, read.value.CompletedTasks];

    self.mutationsActiveCount = mutation.value.ActiveCount;
    
    if (self.mutationsCompletedTasksLastRead == null) {
      self.mutationsCompletedTasks.push([mutation.timestamp, 0]);
    } else {
      self.mutationsCompletedTasks.push([
        mutation.timestamp, 
        (mutation.value.CompletedTasks - self.mutationsCompletedTasksLastRead[1]) / (mutation.timestamp - self.mutationsCompletedTasksLastRead[0])
        ]);
    }
    self.mutationsCompletedTasksLastRead = [mutation.timestamp, mutation.value.CompletedTasks];
    
    self.gossipActiveCount =  gossip.value.ActiveCount;

    if (self.gossipCompletedTasksLastRead == null) {
      self.gossipCompletedTasks.push([gossip.timestamp, 0])
    } else {
      self.gossipCompletedTasks.push([gossip.timestamp, gossip.value.CompletedTasks - self.gossipCompletedTasksLastRead])
    }
    self.gossipCompletedTasksLastRead  = gossip.value.CompletedTasks;
  })
};


CassandraOperationsGraph.prototype.getData = function () {
  return [
    this.safePlot(this.readsCompletedTasks),
    this.safePlot(this.mutationsCompletedTasks),
    this.safePlot(this.gossipCompletedTasks)
  ]
};

var singleton = new CassandraOperationsGraph();

module.exports = singleton;
