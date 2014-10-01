var GraphBox = require("../GraphBox"),
    CassandraDBGraph = require("../../API/Applications/CassandraDBGraph");

function DBGraph() {
  GraphBox.call(this, arguments);
}

DBGraph.prototype = Object.create(GraphBox.prototype);

DBGraph.prototype.title = "DB";

DBGraph.prototype.extraSettings = function() {
  return {
    title: "DB",
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
        label: "Completed Tasks",
        size: 1
      }
    ],
  }
};

DBGraph.prototype.fetchData = function() {
  var data = CassandraDBGraph.getData();
  return $.Deferred().resolve(data);
};

module.exports = DBGraph;
