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

  StaticInfo.prototype.formatUptime = function(ms) {
    var x, seconds, minutes, hours, days, uptime = "";
    x = ms / 1000;
    seconds = Math.round(x % 60);
    x /= 60;
    minutes = Math.round(x % 60);
    x /= 60;
    hours = Math.round(x % 24);
    x /= 24;
    days = Math.round(x);

    uptime +=  days + " Days, ";
    uptime +=  hours + " Hours, ";
    uptime +=  minutes + " Minutes, ";
    uptime +=  seconds + " Seconds. ";
    
    return uptime;

  }
  StaticInfo.prototype.parseData = function(hostname, totalMemory, freeMemory, uptime, version) {
    return [
      { key: "Host name", value: hostname },
      { key: "Memory Total", value: helpers.humanReadableByteSize(totalMemory) },
      { key: "Memory Free", value: helpers.humanReadableByteSize(freeMemory) },
      { key: "Uptime", value: this.formatUptime(uptime * 1000) },
      { key: "OSv version", value: version }
    ];
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData.bind(this));
  };

  return StaticInfo;
}());
