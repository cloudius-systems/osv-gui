var OSv = OSv || {};

OSv.Boxes.CPUBox = (function() {

  function CPUBox() {

  }

  CPUBox.prototype = new OSv.Boxes.GraphBox();

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
    series: [
        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "cpu_ms",
          size: 1
        }
      ],
    }
  };

  CPUBox.prototype.fetchData = function() {
    var cpuData = OSv.API.OS.cpu();
    if (cpuData.length === 0) {
      cpuData = [ null ];
    }

    return $.Deferred().resolve([ cpuData ]);
  };

  return CPUBox;

}());