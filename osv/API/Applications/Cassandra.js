var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.Cassandra = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall, 
    liveNodes,
    isRunning = null,
    ifIsRunning,
    loadMap;

  liveNodes = function () {
    return Jolokia.read("org.apache.cassandra.db:type=StorageService/LiveNodes");
  };

  loadMap = function () {
    return Jolokia.read("org.apache.cassandra.db:type=StorageService/LoadMap");
  };

  ifIsRunning = function () {
    var promise = $.Deferred();

    if (isRunning !== null) {
      promise.resolve(isRunning)
    } else {
      Jolokia.read("org.apache.cassandra.db:type=StorageService/LiveNodes")
        .then(function () {
          isRunning = true;
          promise.resolve(isRunning)
        })
        .fail(function () {
          isRunning = false;
          promise.resolve(isRunning)
        })
    }
    console.log(isRunning)
    return promise;
  }
  apiGETCall("/jolokia/read/org.apache.cassandra.metrics:*")

  return { 
    liveNodes: liveNodes,
    loadMap: loadMap,
    ifIsRunning: ifIsRunning
  };

}());
