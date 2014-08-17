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

    $(document).on("keyup", "#filterTracepoints", function () {
      self.filterTracepoints($(this).val());
    });
  }

  Profiler.prototype.filterTracepoints = function(keyword) {
    this.traceListBox.filter(keyword);
  };

  Profiler.prototype.refresh = function() {
    this.tracePointsBox.refresh();
  };

  Profiler.prototype.addTracePoint = function(id) {
    this.tracePointsBox.add(id);
  };

  Profiler.prototype.removeTracePoint = function(id) {
    this.tracePointsBox.remove(id);
  };

  Profiler.prototype.handler = function() {
    this.tracePointsBox = new Boxes.TracePoints;
    this.traceListBox = new Boxes.TraceList
    this.layout = new OSv.Layouts.BoxesLayout([
      this.traceListBox, this.tracePointsBox
    ]);
    this.layout.render();
  };

  return Profiler;
}());
