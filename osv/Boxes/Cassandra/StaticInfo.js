var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.StaticInfo = (function() {

  var Cassandra = OSv.API.Applocations.Cassandra;

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
    return [
      { key: "Live Nodes", value: liveNodes },
      { key: "loadMap", value: loadMap }
    ];
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData.bind(this));
  };

  return StaticInfo;
}());
