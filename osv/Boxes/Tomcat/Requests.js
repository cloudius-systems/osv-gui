var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Tomcat = OSv.Boxes.Tomcat || {};

OSv.Boxes.Tomcat.Requests = (function() {

  var Tomcat = OSv.API.Applications.Tomcat;

  function Requests() {
    OSv.Boxes.GraphBox.call(this, arguments);
  }

  Requests.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

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
      series: Tomcat.Requests.getLabels().map(function (label) {
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
    var data = Tomcat.Requests.getPlots();
    return $.Deferred().resolve(data);
      
  };

  return Requests;
}());
