var GraphBox = require("../GraphBox"),
    CassandraLatencyGraph = require("../../API/Applications/CassandraLatencyGraph");

function LatencyGraph() {
  GraphBox.call(this, arguments)
}

LatencyGraph.prototype = Object.create(GraphBox.prototype);

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
  var data = CassandraLatencyGraph.getData();
  return $.Deferred().resolve(data);
    
};

module.exports = LatencyGraph;
