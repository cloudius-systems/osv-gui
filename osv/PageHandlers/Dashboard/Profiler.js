var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Profiler = (function() {
 
  var Boxes = OSv.Boxes;

  function Profiler() {

    var self =this;
    
    $(document).on("click", "[data-tracepoint-name]", function () {
      self.addTracePoint($(this).attr("data-tracepoint-name"));
    });

    $(document).on("click", ".removeTrace", function () {
      self.removeTracePoint($(this).attr("data-id"));
    });
  }

  Profiler.prototype.refresh = function() {
    this.tracePointsBox.refresh();
  }
  Profiler.prototype.addTracePoint = function(id) {
    this.tracePointsBox.add(id);
  };

  Profiler.prototype.removeTracePoint = function(id) {
    this.tracePointsBox.remove(id);
  };

  Profiler.prototype.handler = function() {
    this.tracePointsBox = new Boxes.TracePoints;
    this.layout = new OSv.Layouts.BoxesLayout([
      new Boxes.TraceList, this.tracePointsBox
    ]);
    this.layout.render();
  };

  return Profiler;
}());
