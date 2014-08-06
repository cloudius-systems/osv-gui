var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.CPUTableBox = (function() {

  function CPUTableBox() {
    this.interval = setInterval(this.refresh.bind(this), OSv.Settings.DataFetchingRate)
  }

  CPUTableBox.prototype = new OSv.Boxes.StaticBox();

  CPUTableBox.prototype.template = "/osv/templates/boxes/CPUTable.html";

  CPUTableBox.prototype.clear = function() {
    clearInterval(this.interval);
    $(this.selector).remove();
  };

  CPUTableBox.prototype.refresh = function (selected) {
    var container =$(this.selector),
      template = this.getTemplate();

    this.fetchData().then(function (ctx) {
      console.log(ctx)
      container.html(template(ctx))
    });
  };

  CPUTableBox.prototype.postRender = function () {
    console.log("HEY");
  };
  CPUTableBox.prototype.fetchData = function () {
    var cpus = OSv.API.OS.CPU();
    var parsed = $.map(cpus, function (cpu) {
      cpu.name = cpu.name.replace("idle", "")
      cpu.usage = cpu.plot[ cpu.plot.length - 1 ][1].toFixed(2) + "%";
      return cpu;
    });
    return $.Deferred().resolve( parsed )
  };

  return CPUTableBox;

}());
