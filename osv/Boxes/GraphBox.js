var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.GraphBox = (function() {

  function GraphBox() {

  }

  GraphBox.prototype = new OSv.Boxes.BaseBox();

  GraphBox.prototype.baseSettings = function() {
    return {
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

  GraphBox.prototype.renderGraph = function(selector, setATimeout) {
    var self = this,
      settings = self.getSettings();

    selector = selector || this.selector;
    this.selector = selector;
    this.fetchData().then(function(data) {
      if (self.plot) {
        self.plot.destroy();
      }
      
      if (data[0][0]) settings.axes.xaxis.min = data[0][0][0];
      if (data[data.length-1][0]) settings.axes.xaxis.max = data[0][data[0].length-1][0];
      
      self.plot = $.jqplot(selector, data, settings);
    });

    if (setATimeout !== false) {
      this.timeout = setTimeout(function() { self.renderGraph(selector) }, OSv.Settings.DataFetchingRate);
    }
  };

  GraphBox.prototype.clear = function () {
    clearTimeout(this.timeout)
    $(this.selector).remove();
  };

  GraphBox.prototype.postRender = function(selector) {
    this.selector = selector;
    this.renderGraph(selector);
  };

  return GraphBox;
}());
