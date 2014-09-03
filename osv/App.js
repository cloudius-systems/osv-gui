var OSv = OSv || {};

OSv.App = Davis(function() {

  var Handlers = OSv.PageHandlers,
    baseHandler = new Handlers.BaseHandler(),
    mainHandler = new Handlers.Dashboard.Main(),
    threadsHandler = new Handlers.Dashboard.Threads(),
    profilerHandler = new Handlers.Dashboard.Profiler(),
    jvmHandler = new Handlers.Dashboard.JVM(),
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

  var self = this;
  OSv.API.JVM.version()
    .then(function () {
      self.get("/dashboard/jvm", function() {
          jvmHandler.handler();
      });
    })
   .fail(function () {
      baseHandler.removeJVMTab();
   });

  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
