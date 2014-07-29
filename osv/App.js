var OSv = OSv || {};

OSv.App = Davis(function() {

  this.configure(function() {
    this.generateRequestOnPageLoad = true;
  });

  this.get("/dashboard", function() {
    var handler = new OSv.PageHandlers.Dashboard.Main();
    handler.handler();
  });
});
