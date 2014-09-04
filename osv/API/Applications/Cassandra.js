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
    var self = this;
    if (self.isRunning == null) {
      return Jolokia.read("org.apache.cassandra.db:type=StorageService/LiveNodes")
        .then(function () {
          self.isRunning = true;
        })
        .fail(function () {
          self.isRunning = false;
        });
    }
    if (isRunning) {
      return $.Deferred().resolve(true);
    } else {
      return $.Deferred().reject();
    }

  }
  apiGETCall("/jolokia/read/org.apache.cassandra.metrics:*")

  return { 
    liveNodes: liveNodes,
    loadMap: loadMap,
    ifIsRunning: ifIsRunning
  };

}());
