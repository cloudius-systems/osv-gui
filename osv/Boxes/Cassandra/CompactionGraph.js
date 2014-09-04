var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Cassandra = OSv.Boxes.Cassandra || {};

OSv.Boxes.Cassandra.CompactionGraph = (function() {

  function CompactionGraph() {

  }

  CompactionGraph.prototype = new OSv.Boxes.GraphBox();

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
    var data = OSv.API.Applications.CassandraCompactionGraph.getData();
    return $.Deferred().resolve(data);
      
  };

  return CompactionGraph;
}());
