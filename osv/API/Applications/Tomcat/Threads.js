var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.Tomcat = OSv.API.Applications.Tomcat || {};
OSv.API.Applications.Tomcat.Threads = (function() {

  var Jolokia = OSv.API.Jolokia,
    CassandraGraph = OSv.API.Applications.CassandraGraph,
    apiGETCall = helpers.apiGETCall


  function Threads() {
    var self = this;
    OSv.API.Applications.Tomcat.ifIsRunning().then(function (isRunning) {
      if (isRunning) self.startPulling();
    });
  }

  Threads.prototype = Object.create(CassandraGraph.prototype);

  Threads.prototype.plots = null;

  Threads.prototype.pullData = function () {
    var self = this;
    if (window.globalPause) return;
    Jolokia.read("Catalina:type=ThreadPool,name=*?ignoreErrors=true")
    .then(function (res) {
      if (self.plots == null) self.plots = {};
      var timestamp = res.timestamp * 1000;
      $.map(res.value, function (value, key) {
        var name = value.name, //key.match(/name=(.*?)($|,)/)[1],
          threadsBusy = value.currentThreadsBusy,
          threadsBusyLabel = name + " - Busy Threads",
          threadsCount = value.currentThreadCount,
          threadsCountLabel = name + " - Threads Count";

        if (!self.plots[threadsBusyLabel]) self.plots[threadsBusyLabel] = [];
        if (!self.plots[threadsCountLabel]) self.plots[threadsCountLabel] = [];
        self.plots[threadsBusyLabel].push([ timestamp, threadsBusy])
        self.plots[threadsCountLabel].push([ timestamp, threadsCount])
      });
    })
  };

  Threads.prototype.getPlots = function () {
    if (this.plots == null) return [[null]];
    return $.map(this.plots, function (plot) {
      return [plot.slice(-9)];
    });
  };

  Threads.prototype.getLabels = function () {
    if (this.plots == null) return [];
    return $.map(this.plots, function (plot, name) {
      return name;
    });
  };

  var singleton = new Threads();
  
  return singleton;
}());
