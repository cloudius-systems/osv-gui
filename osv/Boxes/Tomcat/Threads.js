var GraphBox = require("../GraphBox"),
    ThreadsAPI = require("../../API/Applications/Tomcat/Threads")
    
function Threads() {
  GraphBox.call(this, arguments);
}

Threads.prototype = Object.create(GraphBox.prototype);

Threads.prototype.title = "Threads";

Threads.prototype.extraSettings = function() {
  return {
    axes: {
      xaxis: {
        renderer: $.jqplot.DateAxisRenderer,
        tickOptions: {
          formatString: "%H:%M:%S"
        },
        label: "Time"
      },
    },
    series: ThreadsAPI.getLabels().map(function (label) {
      return {
        lineWidth: 1,
        markerOptions: {
          style: "circle"
        },
        label: label,
        size: 1
      }
    }),
  }
};

Threads.prototype.fetchData = function() {
  var data = ThreadsAPI.getPlots();
  return $.Deferred().resolve(data);
    
};

module.exports = Threads;
