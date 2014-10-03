var OS = require("../API/OS"),
    JVM = require("../API/JVM"),
    Settings = require("../Settings"),
    Cassandra = require("../API/Applications/Cassandra"),
    Tomcat = require("../API/Applications/Tomcat/Tomcat");

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
  if (window.location.href.indexOf("/dashboard") != -1) {
    $("[data-dashboard-link").addClass("active");
  } else {
    $("[data-dashboard-link").removeClass("active");
  }
};

BaseHandler.prototype.setSwaggerLink = function() {
  $("[data-swagger-href]").attr("href", Settings.BasePath);
};

BaseHandler.prototype.checkTomcatStatus = function () {
  var $tomcatTab = $("a[href='/dashboard/tomcat']").parent("li");
  Tomcat.ifIsRunning().then(function (isRunning) {
     if (!isRunning) { 
      $tomcatTab.remove();
     } else {
      $tomcatTab.removeClass("hidden");
     }
  })
};

BaseHandler.prototype.checkCassandraStatus = function () {
  var $cassandraTab = $("a[href='/dashboard/cassandra']").parent("li");
  Cassandra.ifIsRunning().then(function (isRunning) {
     if (!isRunning) { 
      $cassandraTab.remove();
     } else {
      $cassandraTab.removeClass("hidden");
     }
  })
};

BaseHandler.prototype.checkJVMStatus = function () {
  var $jvmTab = $("a[href='/dashboard/jvm']").parent("li");
   JVM.version()
    .then(function () {
      $jvmTab.removeClass("hidden")
    })
    .fail(function () {
      $jvmTab.remove();
    })
};

BaseHandler.prototype.subscribe = function() {
  var self = this;
  
  self.checkCassandraStatus();
  self.checkJVMStatus();
  self.checkTomcatStatus();
  
  $(document).on("runRoute", function () {
    self.updateHostname();
    self.markSelectedTab();
    self.setSwaggerLink();
  });

  $(document).on("click", "[data-global-play]", function () {
    var playEvent = new CustomEvent('play')
    playEvent.initCustomEvent('play', true, true);
    document.dispatchEvent(playEvent);
  });
  
  $(document).on("click", "[data-global-pause]", function () {
    var pauseEvent = new CustomEvent('pause')
    pauseEvent.initCustomEvent('pause', true, true);
    document.dispatchEvent(pauseEvent);
  });

  $(document).on("play", function () {
    window.globalPause = false;
  });

  $(document).on("pause", function () {
    window.globalPause = true;
  });
};

module.exports = BaseHandler;
