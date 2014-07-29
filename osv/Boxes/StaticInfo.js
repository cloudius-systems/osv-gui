var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.StaticInfo = (function() {

  function StaticInfo() {

  }

  StaticInfo.prototype = new OSv.Boxes.StaticBox();

  StaticInfo.prototype.getData = function() {
    var OS = OSv.API.OS;
    return $.when(
      OS.getHostname(),
      OS.Memory.total(),
      OS.Memory.free(),
      OS.uptime(),
      OS.version()
    );
  };

  StaticInfo.prototype.parseData = function(hostname, totalMemory, freeMemory, uptime, version) {
    return [
      { key: "Host name", value: hostname[0] },
      { key: "Memory Total", value: totalMemory[0] },
      { key: "Memory Free", value: freeMemory[0] },
      { key: "Uptime", value: uptime[0] },
      { key: "OSv version", value: version[0] }
    ];
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData);
  };

  return StaticInfo;
}());
