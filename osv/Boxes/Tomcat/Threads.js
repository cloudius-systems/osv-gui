var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};
OSv.Boxes.Tomcat = OSv.Boxes.Tomcat || {};

OSv.Boxes.Tomcat.Threads = (function() {

  var Tomcat = OSv.API.Applications.Tomcat;

  function Threads() {
    OSv.Boxes.GraphBox.call(this, arguments);
  }

  Threads.prototype = Object.create(OSv.Boxes.GraphBox.prototype);

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
      series: Tomcat.Threads.getLabels().map(function (label) {
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
    var data = Tomcat.Threads.getPlots();
    return $.Deferred().resolve(data);
      
  };

  return Threads;
}());
