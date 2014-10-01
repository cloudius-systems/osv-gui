var Jolokia = require("../Jolokia"),
  CassandraGraph = require("./CassandraGraph"),
  Cassandra = require("./Cassandra"),
  apiGETCall = require("../../helpers").apiGETCall;


function CassandraDBGraph() {
  var self = this;
  Cassandra.ifIsRunning().then(function (isRunning) {
    if (isRunning) self.startPulling();
  });
}

CassandraDBGraph.prototype = Object.create(CassandraGraph.prototype);

CassandraDBGraph.prototype.completedTasksLastRead = null;
CassandraDBGraph.prototype.completedTasks = [];

CassandraDBGraph.prototype.pullData = function () {
  var self = this;
  if (window.globalPause) return;
  $.when(
    Jolokia.read("org.apache.cassandra.db:type=Commitlog")
  ).then(function (Commitlog) {
    if (self.completedTasksLastRead == null) {
      self.completedTasks.push([Commitlog.timestamp, 0])
    } else {
      self.completedTasks.push([
        Commitlog.timestamp, 
        (Commitlog.value.CompletedTasks - self.completedTasksLastRead[1]) / (Commitlog.timestamp - self.completedTasksLastRead[0])
      ])
    }
    self.completedTasksLastRead = [Commitlog.timestamp, Commitlog.value.CompletedTasks];
  })
};

CassandraDBGraph.prototype.getData = function() {
  return [
    this.safePlot(this.completedTasks)
  ]
};

var singleton = new CassandraDBGraph();

module.exports = singleton;
