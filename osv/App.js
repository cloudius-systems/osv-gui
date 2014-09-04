var OSv = OSv || {};

OSv.App = Davis(function() {

  var Handlers = OSv.PageHandlers,
    baseHandler = new Handlers.BaseHandler(),
    mainHandler = new Handlers.Dashboard.Main(),
    threadsHandler = new Handlers.Dashboard.Threads(),
    profilerHandler = new Handlers.Dashboard.Profiler(),
    jvmHandler = new Handlers.Dashboard.JVM(),
    cassandraHandler = new Handlers.Dashboard.Cassandra(),
    runRoute = new CustomEvent('runRoute')

  this.configure(function() {
    this.generateRequestOnPageLoad = true;
  });

  this.get("/dashboard", function() {
    mainHandler.handler();
  });

  this.get("/dashboard/threads", function() {
    threadsHandler.handler();
  });

  this.get("/dashboard/profiler", function() {
    profilerHandler.handler();
  });

  this.get("/dashboard/cassandra", function() {
    cassandraHandler.handler();
  });

  this.get("/dashboard/jvm", function() {
    jvmHandler.handler();
  });
  
  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
