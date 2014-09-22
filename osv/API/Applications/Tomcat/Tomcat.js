var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.Tomcat = (function () {

  var Jolokia = OSv.API.Jolokia,
    isRunning = null,
    ifIsRunning;

  ifIsRunning = function () {
    var promise = $.Deferred();

    if (isRunning !== null) {
      promise.resolve(isRunning)
    } else {
      Jolokia.read("Catalina:type=StringCache")
        .then(function (res) {
          if (res.status == 200) {
            isRunning = true;
          } else {
            isRunning = false;
          }
          promise.resolve(isRunning)
        })
        .fail(function () {
          isRunning = false;
          promise.resolve(isRunning)
        })
    }
    return promise;
  };

  return {
    ifIsRunning: ifIsRunning
  }
}());
