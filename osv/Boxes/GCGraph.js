var OSv = OSv || {};

OSv.Boxes.GCGraph = (function() {

  function GCGraph() {
    OSv.Boxes.GraphBox.call(this, arguments)
  }

  GCGraph.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

  GCGraph.prototype.title = "Garbage Collection";

  GCGraph.prototype.extraSettings = function() {
    return {
      title: "Garbage Collection",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        },
        yaxis: {
          min: 0,
          max: this.total
        }
      },
      series: OSv.API.JVM.GCGraphAPI.labels.map(function (label) {
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

  GCGraph.prototype.fetchData = function() {
    return $.Deferred().resolve(OSv.API.JVM.GCGraphAPI.getData());
  };

  return GCGraph;
}());
