var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.ThreadsTimeline = (function() {

  function ThreadsTimeline() {
  }

  ThreadsTimeline.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  ThreadsTimeline.prototype.template = "/osv/templates/boxes/EmptyBox.html";

  return ThreadsTimeline;

}());
