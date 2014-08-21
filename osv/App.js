var OSv = OSv || {};

OSv.App = Davis(function() {

  var Handlers = OSv.PageHandlers,
    baseHandler = new Handlers.BaseHandler(),
    mainHandler = new Handlers.Dashboard.Main(),
    threadsHandler = new Handlers.Dashboard.Threads(),
    profilerHandler = new Handlers.Dashboard.Profiler(),
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

  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
