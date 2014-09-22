var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.Tomcat = OSv.API.Applications.Tomcat || {};
OSv.API.Applications.Tomcat.Sessions = (function() {

  var Jolokia = OSv.API.Jolokia,
    CassandraGraph = OSv.API.Applications.CassandraGraph,
    apiGETCall = helpers.apiGETCall


  function Sessions() {
    var self = this;
    OSv.API.Applications.Tomcat.ifIsRunning().then(function (isRunning) {
      if (isRunning) self.startPulling();
    });
  }

  Sessions.prototype = Object.create(CassandraGraph.prototype);

  Sessions.prototype.plots = null;

  Sessions.prototype.pullData = function () {
    var self = this;
    if (window.globalPause) return;
    Jolokia.read("Catalina:context=*,host=*,type=Manager/activeSessions?ignoreErrors=true")
    .then(function (res) {
      if (self.plots == null) self.plots = {};
      var timestamp = res.timestamp * 1000;
      $.map(res.value, function (value, key) {
        var context = key.match(/context=(.*?)($|,)/)[1],
          activeSessions = value.activeSessions;
        self.plots[context] = self.plots[context] || [];
        self.plots[context].push([ timestamp, activeSessions])
      });
    })
  };

  Sessions.prototype.getPlots = function () {
    if (this.plots == null) return [[null]];
    return $.map(this.plots, function (plot) {
      return [plot.slice(-9)];
    });
  };

  Sessions.prototype.getLabels = function () {
    if (this.plots == null) return [];
    return $.map(this.plots, function (plot, name) {
      return name;
    });
  };

  var singleton = new Sessions();
  
  return singleton;
}());
