var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.Cassandra = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall, 
    liveNodes,
    loadMap;

  liveNodes = function () {
    return Jolokia.read("org.apache.cassandra.db:type=StorageService/LiveNodes");
  };

  loadMap = function () {
    return Jolokia.read("org.apache.cassandra.db:type=StorageService/LoadMap");
  };

  return { 
    liveNodes: liveNodes,
    loadMap: loadMap
  };

}());
