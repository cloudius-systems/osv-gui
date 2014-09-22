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

  var singleton = new Threads();
  
  return singleton;
}());
