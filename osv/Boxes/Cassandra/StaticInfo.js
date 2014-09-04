var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.StaticInfo = (function() {

  var Cassandra = OSv.API.Applications.Cassandra;

  function StaticInfo() {

  }

  StaticInfo.prototype = new OSv.Boxes.StaticBox();

  StaticInfo.prototype.template = "/osv/templates/boxes/cassandra/StaticInfo.html";

  StaticInfo.prototype.getData = function() {
    return $.when(
      Cassandra.liveNodes(),
      Cassandra.loadMap()
    );
  };

  StaticInfo.prototype.parseData = function(liveNodes, loadMap) {
    return {
      liveNodes: liveNodes,
      loadMap: loadMap
    }
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData.bind(this));
  };

  return StaticInfo;
}());
