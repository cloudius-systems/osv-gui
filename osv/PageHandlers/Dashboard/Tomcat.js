var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Tomcat = (function() {

  var Boxes = OSv.Boxes.Tomcat;

  function Tomcat() {
  }

  Tomcat.prototype.handler = function() {
    this.layout = new OSv.Layouts.BoxesLayout([
      new Boxes.Threads(), new Boxes.Requests()
    ]);
    this.layout.render();
  };

  return Tomcat;
}());
