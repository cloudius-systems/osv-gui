var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Threads = (function() {

  var Boxes = OSv.Boxes;

  function Threads() {
    this.layout = new OSv.Layouts.ThreadsLayout();
  }

  Threads.prototype.handler = function() {
    this.layout.render();
  };

  return Threads;
}());
