var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.OperationsGraph = (function() {

  function OperationsGraph() {

  }

  OperationsGraph.prototype = new OSv.Boxes.GraphBox();

  OperationsGraph.prototype.title = "Completed Tasks";

  OperationsGraph.prototype.extraSettings = function() {
    return {
      title: "Completed Tasks",
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
          label: "Read"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Write"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Gossip"
        }

      ],
    }
  };

  OperationsGraph.prototype.fetchData = function() {
    var data = OSv.API.Applications.CassandraOperationsGraph.getData();
    return $.Deferred().resolve(data);
      
  };

  return OperationsGraph;
}());
