var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.GraphBox = (function() {

  function GraphBox() {

  }

  GraphBox.prototype = new OSv.Boxes.BaseBox();

  GraphBox.prototype.baseSettings = function() {
    return {
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
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
    highlighter: {
          show: true,
          sizeAdjust: 7.5
      },
      legend: {
        show: true,
          location: "nw",
          xoffset: 12,
          yoffset: 12
      }
    }
  };

  GraphBox.prototype.extraSettings = function() {
    return {};
  };

  GraphBox.prototype.getSettings = function() {
    return $.extend(this.baseSettings(), this.extraSettings())
  };

  GraphBox.prototype.title = "Graph";

  GraphBox.prototype.template = "/osv/templates/boxes/GraphBox.html";

  GraphBox.prototype.getHtml = function() {
    var template = this.getTemplate(),
      context = { title: this.title },
      html = template(context);

    return html;
  };

  GraphBox.prototype.fetchData = function() {
    return $.Deferred().resolve([ [ null ] ]);
  };

  GraphBox.prototype.renderGraph = function(selector) {
    var self = this;
    this.fetchData().then(function(data) {
      if (self.plot) {
        self.plot.destroy();
      }
      self.plot = $.jqplot(selector, data, self.getSettings());
    });

    setTimeout(function() { self.renderGraph(selector) }, OSv.Settings.DataFetchingRate);
  };

  GraphBox.prototype.postRender = function(selector) {
    this.renderGraph(selector);
  };

  return GraphBox;
}());
