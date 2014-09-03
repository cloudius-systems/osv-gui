var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.JVM = (function() {

  var Boxes = OSv.Boxes;

  function JVM() {
  }

  JVM.prototype.handler = function() {
    this.layout = new OSv.Layouts.BoxesLayout([ 
      new Boxes.MBeansBox()
    ]);
    this.layout.render();
  };

  return JVM;
}());
