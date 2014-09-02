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
      { key: "Host name", value: hostname },
      { key: "Memory Total", value: helpers.humanReadableByteSize(totalMemory) },
      { key: "Memory Free", value: helpers.humanReadableByteSize(freeMemory) },
      { key: "Uptime", value: uptime },
      { key: "OSv version", value: version }
    ];
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData);
  };

  return StaticInfo;
}());
