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

  BaseHandler.prototype.removeJVMTab = function() {
    
  };

  BaseHandler.prototype.checkCassandraStatus = function () {
    var $cassandraTab = $("a[href='/dashboard/cassandra']").parent("li");
    OSv.API.Applications.Cassandra.ifIsRunning().then(function (isRunning) {
       if (!isRunning) { 
        $cassandraTab.remove();
       } else {
        $cassandraTab.removeClass("hidden");
       }
    })
  };

  BaseHandler.prototype.checkJVMStatus = function () {
    var $jvmTab = $("a[href='/dashboard/jvm']").parent("li");
     OSv.API.JVM.version()
      .then(function () {
        $jvmTab.removeClass("hidden")
      })
      .fail(function () {
        $jvmTab.remove();
      })
  };

  BaseHandler.prototype.subscribe = function() {
    var self = this;
    $(window).on("load", function () {
      self.checkCassandraStatus();
      self.checkJVMStatus();
    })
    $(document).on("runRoute", function () {
      self.updateHostname();
      self.markSelectedTab();
      self.setSwaggerLink();
    });
  };

  return BaseHandler;
}());
