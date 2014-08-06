var OSv = OSv || {};

OSv.App = Davis(function() {

  var Handlers = OSv.PageHandlers,
    mainHandler = new Handlers.Dashboard.Main(),
    threadsHandler = new Handlers.Dashboard.Threads(),
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

  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
