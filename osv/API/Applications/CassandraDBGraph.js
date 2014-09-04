var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraDBGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraDBGraph() {
    this.startPulling();
  }

  CassandraDBGraph.prototype.completedTasksLastRead = null;
  CassandraDBGraph.prototype.completedTasks = [];

  CassandraDBGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.db:type=Commitlog")
    ).then(function (Commitlog) {
      var timestamp = Date.now();
      if (self.completedTasksLastRead == null) {
        self.completedTasks.push([timestamp, 0])
      } else {
        self.completedTasks.push([timestamp, Commitlog.CompletedTasks - self.completedTasksLastRead])
      }
      self.completedTasksLastRead = Commitlog.CompletedTasks;
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
