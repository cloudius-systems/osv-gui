var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};

OSv.PageHandlers.BaseHandler = (function() {

  var OS = OSv.API.OS;

  function BaseHandler() {
    this.subscribe();
  }

  BaseHandler.prototype.updateHostname = function() {
    OS.getHostname().then(function (hostname) {
      $("[data-hostname]").html(hostname);
    });
  };

  BaseHandler.prototype.subscribe = function() {
    $(document).on("runRoute", this.updateHostname)
  };

  return BaseHandler;
}());
