var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.TracePoints = (function() {

  function TracePoints() {
    this.interval = setInterval(this.refresh.bind(this), OSv.Settings.DataFetchingRate);
  }

  TracePoints.prototype = new OSv.Boxes.StaticBox();

  TracePoints.prototype.template = "/osv/templates/boxes/TracePoints.html";

  TracePoints.prototype.fetchData = function () {
    return OSv.API.Trace.counts()
  };

  TracePoints.prototype.clear = function() {
    clearInterval(this.interval);
    $(this.selector).remove();
  };

  return TracePoints;
}());
