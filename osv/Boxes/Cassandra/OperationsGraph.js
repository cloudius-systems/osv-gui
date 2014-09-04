var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.OperationsGraph = (function() {

  function OperationsGraph() {

  }

  OperationsGraph.prototype = new OSv.Boxes.GraphBox();

  OperationsGraph.prototype.title = "Operations";

  OperationsGraph.prototype.extraSettings = function() {
    return {
      title: "Operations",
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
          label: "Read - Active Count",
          size: 1
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Read - Completed Tasks"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Write - Active Count"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Write - Completed Tasks"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Gossip - Active Count"
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Gossip - Completed Count"
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
