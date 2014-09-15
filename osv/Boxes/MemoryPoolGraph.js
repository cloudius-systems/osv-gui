var OSv = OSv || {};

OSv.Boxes.MemoryPoolGraph = (function() {

  function MemoryPoolGraph() {
    OSv.Boxes.GraphBox.call(this, arguments)
  }

  MemoryPoolGraph.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

  MemoryPoolGraph.prototype.title = "Memory Pools";

  MemoryPoolGraph.prototype.extraSettings = function() {
    return {
      title: "Memory Pools",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        },
        yaxis: {
          max: this.total,
          min: 0,
          tickOptions: {
            formatter: function(foramt, val) {
              return helpers.humanReadableByteSize(val);
            }
          }
        }
      },
      series: OSv.API.JVM.MemoryPoolGraph.labels.map(function (label) {
        return {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: label,
          size: 1
        }
      }),
    }
  };

  MemoryPoolGraph.prototype.fetchData = function() {
    return $.Deferred().resolve(OSv.API.JVM.MemoryPoolGraph.getData());
  };

  return MemoryPoolGraph;
}());
