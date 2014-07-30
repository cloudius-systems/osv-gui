var OSv = OSv || {};
OSv.Layouts = OSv.Layouts || {};

OSv.Layouts.ThreadsLayout = (function() {

  function ThreadsLayout() {
    OSv.Layouts.BoxesLayout.apply(this, arguments);
  }

  ThreadsLayout.prototype = new OSv.Layouts.BoxesLayout();

  return ThreadsLayout;

}());
