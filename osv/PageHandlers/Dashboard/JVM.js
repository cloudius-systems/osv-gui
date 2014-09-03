var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.JVM = (function() {

  var Boxes = OSv.Boxes;

  function JVM() {
  }

  JVM.prototype.handler = function() {
    this.MBeansBox = new Boxes.MBeansBox();
    this.MBeansAttributesBox = new Boxes.MBeansAttributesBox();
    this.layout = new OSv.Layouts.BoxesLayout([ 
      this.MBeansBox, this.MBeansAttributesBox
    ]);
    this.layout.render();
  };

  return JVM;
}());
