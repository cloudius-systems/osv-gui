var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.LatencyGraph = (function() {

  function LatencyGraph() {
    OSv.Boxes.GraphBox.call(this, arguments)
  }

  LatencyGraph.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

  LatencyGraph.prototype.title = "Latency";

  LatencyGraph.prototype.extraSettings = function() {
    return {
      title: "Latency",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        },
      },
      series: [
        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Range Latency",
          size: 1
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Read Latency"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Write Latency"
        }

      ],
    }
  };

  LatencyGraph.prototype.fetchData = function() {
    var data = OSv.API.Applications.CassandraLatencyGraph.getData();
    return $.Deferred().resolve(data);
      
  };

  return LatencyGraph;
}());
