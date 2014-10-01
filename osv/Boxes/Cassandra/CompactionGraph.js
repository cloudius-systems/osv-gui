var GraphBox = require("../GraphBox"),
    CassandraCompactionGraph = require("../../API/Applications/CassandraCompactionGraph");

function CompactionGraph() {
  GraphBox.call(this, arguments)
}

CompactionGraph.prototype = Object.create(GraphBox.prototype);

CompactionGraph.prototype.title = "Compaction";

CompactionGraph.prototype.extraSettings = function() {
  return {
    title: "Compaction",
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
        label: "Bytes Compacted",
        size: 1
      },

      {
        lineWidth: 1,
        markerOptions: {
          style: "circle"
        },
        label: "Total Bytes in Progress",
        size: 1
      }

    ],
  }
};

CompactionGraph.prototype.fetchData = function() {
  var data = CassandraCompactionGraph.getData();
  return $.Deferred().resolve(data);
    
};

module.exports = CompactionGraph;
