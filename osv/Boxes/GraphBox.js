var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.GraphBox = (function() {

  function GraphBox() {

  }

  GraphBox.prototype = new OSv.Boxes.BaseBox();

  GraphBox.prototype.title = "Graph";

  GraphBox.prototype.template = "/osv/templates/boxes/GraphBox.html";

  GraphBox.prototype.graphOptions = {};

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
      self.plot = $.jqplot(selector, data, self.graphOptions);
      window.plot = self.plot;
    });

    setTimeout(function() { self.renderGraph(selector) }, OSv.Settings.DataFetchingRate);
  };

  GraphBox.prototype.postRender = function(selector) {
    this.renderGraph(selector);
  };

  return GraphBox;
}());
