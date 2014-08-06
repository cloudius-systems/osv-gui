var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Main = (function() {

  var Boxes = OSv.Boxes;

  function Main() {
  }

  Main.prototype.handler = function() {
    this.layout = new OSv.Layouts.BoxesLayout([
      new Boxes.StaticInfo(), new Boxes.MemoryBox(),
      new Boxes.CPUBox(), new Boxes.CPUTableBox()
    ]);
    this.layout.render();
  };

  return Main;
}());
