var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraDBGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraDBGraph() {
    var self = this;
    OSv.API.Applications.Cassandra.ifIsRunning().then(function (isRunning) {
      if (isRunning) self.startPulling();
    });
  }

  CassandraDBGraph.prototype.completedTasksLastRead = null;
  CassandraDBGraph.prototype.completedTasks = [];

  CassandraDBGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.db:type=Commitlog")
    ).then(function (Commitlog) {
      if (self.completedTasksLastRead == null) {
        self.completedTasks.push([Commitlog.timestamp, 0])
      } else {
        self.completedTasks.push([Commitlog.timestamp, Commitlog.value.CompletedTasks - self.completedTasksLastRead])
      }
      self.completedTasksLastRead = Commitlog.value.CompletedTasks;
    })
  };

  CassandraDBGraph.prototype.getData = function() {
    return [
      (this.completedTasks.length > 0? this.completedTasks : [[]]).slice(-9),
    ]
  }
  
  CassandraDBGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 2000);
  };

  var singleton = new CassandraDBGraph();
  
  return singleton;
}());
