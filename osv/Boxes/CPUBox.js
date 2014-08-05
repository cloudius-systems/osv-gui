var OSv = OSv || {};

OSv.Boxes.CPUBox = (function() {

  function CPUBox() {

  }

  CPUBox.prototype = new OSv.Boxes.GraphBox();

  CPUBox.prototype.cpus = [];

  CPUBox.prototype.extraSettings = function() {
    return {
      title: "CPU",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        }
      },
    series: this.cpus.map(function (cpu) {
          return {
            lineWidth: 1,
            markerOptions: {
              style: "circle"
            },
            label: cpu.name,
            size: 1
          }
        })
      ,
    }
  };

  CPUBox.prototype.fetchData = function() {
    var cpuData = OSv.API.OS.cpu();
    this.cpus = $.map(cpuData, function (cpu, id) {
      return cpu;
    });
    var plots = this.cpus.map(function (cpu ) {
      return cpu.plot.slice(-1 * OSv.Settings.Graph.MaxTicks );
    });
    if (plots.length == 0) {
      plots = [ [ null ]];
    }
    return $.Deferred().resolve(plots);
  };

  return CPUBox;

}());