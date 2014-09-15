var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.DBGraph = (function() {

  function DBGraph() {
    OSv.Boxes.GraphBox.call(this, arguments);
  }

  DBGraph.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

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
    var data = OSv.API.Applications.CassandraDBGraph.getData();
    return $.Deferred().resolve(data);
      
  };

  return DBGraph;
}());
