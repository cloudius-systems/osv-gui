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

  BaseHandler.prototype.markSelectedTab = function() {
    $(".nav li.active").removeClass("active");
    $("a[href='"+window.location.pathname+"']").parents("li").addClass("active")
  };

  BaseHandler.prototype.setSwaggerLink = function() {
    $("[data-swagger-href]").attr("href", OSv.Settings.BasePath);
  };

  BaseHandler.prototype.subscribe = function() {
    var self = this;

    $(document).on("runRoute", function () {
      self.updateHostname();
      self.markSelectedTab();
      self.setSwaggerLink();
    });
  };

  return BaseHandler;
}());
