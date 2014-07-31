var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.StaticBox = (function() {

  function StaticBox() {
  }

  StaticBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  StaticBox.prototype.template = "/osv/templates/boxes/StaticBox.html";

  return StaticBox;

}());
