var GraphBox = require("../GraphBox"),
    SessionsAPI = require("../../API/Applications/Tomcat/Sessions");

function Sessions() {
  GraphBox.call(this, arguments);
}

Sessions.prototype = Object.create(GraphBox.prototype);

Sessions.prototype.title = "Sessions";

Sessions.prototype.extraSettings = function() {
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
    series: SessionsAPI.getLabels().map(function (label) {
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

Sessions.prototype.fetchData = function() {
  var data = SessionsAPI.getPlots();
  return $.Deferred().resolve(data);
    
};

module.exports = Sessions;
