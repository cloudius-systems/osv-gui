var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Tomcat = OSv.Boxes.Tomcat || {};

OSv.Boxes.Tomcat.Sessions = (function() {

  var Tomcat = OSv.API.Applications.Tomcat;

  function Sessions() {
    OSv.Boxes.GraphBox.call(this, arguments);
  }

  Sessions.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

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
      series: Tomcat.Sessions.getLabels().map(function (label) {
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
    var data = Tomcat.Sessions.getPlots();
    return $.Deferred().resolve(data);
      
  };

  return Sessions;
}());
