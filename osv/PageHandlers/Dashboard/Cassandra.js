var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Cassandra = (function() {

  var Boxes = OSv.Boxes.Cassandra;

  function Cassandra() {
  }

  Cassandra.prototype.handler = function() {
    this.layout = new OSv.Layouts.BoxesLayout([
      new Boxes.StaticInfo()
    ]);
    this.layout.render();
  };

  return Cassandra;
}());
