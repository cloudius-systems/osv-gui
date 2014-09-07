var OSv = OSv || {};

OSv.Boxes.HeapMemoryUsage = (function() {

  function HeapMemoryUsage() {

  }

  HeapMemoryUsage.prototype = new OSv.Boxes.GraphBox();

  HeapMemoryUsage.prototype.title = "Heap Memory Usage";

  HeapMemoryUsage.prototype.extraSettings = function() {
    return {
      title: "Heap Memory Usage",
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
          tickOptions: {
            formatter: function(foramt, val) {
              return helpers.humanReadableByteSize(val * Math.pow(1024, 2));
            }
          }
        }
      },
      series: [{
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Memory",
          size: 1
      }],
    }
  };

  HeapMemoryUsage.prototype.fetchData = function() {
    var memoryUsage = OSv.API.JVM.HeapMemoryUsageGraph.getData();
    if (memoryUsage.length == 0) {
      memoryUsage = [ null ]
    } 
    return $.Deferred().resolve([ memoryUsage ]);
  };

  return HeapMemoryUsage;
}());
