var GraphBox = require("./GraphBox"),
    helpers = require("../helpers"),
    OS = require("../API/OS");
    
function MemoryBox() {
  GraphBox.call(this, arguments);
}

MemoryBox.prototype = Object.create(GraphBox.prototype);

MemoryBox.prototype.title = "Memory";

MemoryBox.prototype.extraSettings = function() {
  return {
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer,
        tickOptions: {
          formatString: "%H:%M:%S"
        },
        label: "Time"
      },
      yaxis: {
        max: this.total,
        tickOptions: {
          formatter: function(foramt, val) {
            return helpers.humanReadableByteSize(val * Math.pow(1024, 2));
          }
        }
      }
    },
    series: [
      {
        lineWidth: 1,
        markerOptions: {
          style: "circle"
        },
        label: "Free",
        size: 1
      },

      {
        lineWidth: 1,
        markerOptions: {
          style: "circle"
        },
        label: "Total"
      }

    ],
  }
};

MemoryBox.prototype.fetchData = function() {
  var MemoryHistory = OS.Memory.History,
    free = MemoryHistory.free(),
    total = MemoryHistory.total();

  this.total = total[ total.length - 1][1];
  // If there was no data fetched yet, the graph will break the whole application.
  // this is a workaround.
  if (free.length === 0) {
    free = [ null ];
  }
  if (total.length === 0) {
    total = [ null ];
  }

  return $.Deferred().resolve([ free ]);
};

module.exports = MemoryBox;
