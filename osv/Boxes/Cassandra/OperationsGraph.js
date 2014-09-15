var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.OperationsGraph = (function() {

  function OperationsGraph() {
    OSv.Boxes.SideTextGraphBox.call(this, arguments)
  }

  OperationsGraph.prototype = Object.create(OSv.Boxes.SideTextGraphBox.prototype);

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
          label: "Mutation"
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
  OperationsGraph.prototype.getSideText = function () {
    return [
      {
        label: "Read - Active",
        value: OSv.API.Applications.CassandraOperationsGraph.readsActiveCount,
        unit: ""
      },

      {
        label: "Mutation - Active",
        value: OSv.API.Applications.CassandraOperationsGraph.mutationsActiveCount,
        unit: ""
      },

      {
        label: "Gossip - Active",
        value: OSv.API.Applications.CassandraOperationsGraph.gossipActiveCount,
        unit: ""
      },

    ];
  };

  OperationsGraph.prototype.fetchData = function() {
    var data = OSv.API.Applications.CassandraOperationsGraph.getData();
    return $.Deferred().resolve(data);
  };


  return OperationsGraph;
}());
