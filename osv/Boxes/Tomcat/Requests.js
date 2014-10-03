var RequestsAPI = require("../../API/Applications/Tomcat/Requests"),
    GraphBox = require("../GraphBox"),
    helpers = require("../../helpers");

function Requests() {
  GraphBox.call(this, arguments);
}

Requests.prototype = Object.create(GraphBox.prototype);

Requests.prototype.title = "Requests";

Requests.prototype.extraSettings = function() {
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
    series: RequestsAPI.getLabels().map(function (label) {
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

Requests.prototype.fetchData = function() {
  var data = RequestsAPI.getPlots();
  return $.Deferred().resolve(data);
    
};

module.exports = Requests;
