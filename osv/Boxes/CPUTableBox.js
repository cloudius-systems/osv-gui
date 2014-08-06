var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.CPUTableBox = (function() {

  function CPUTableBox() {
  }

  CPUTableBox.prototype = new OSv.Boxes.StaticBox();

  CPUTableBox.prototype.template = "/osv/templates/boxes/CPUTable.html";

  CPUTableBox.prototype.refresh = function (selected) {
  };

  CPUTableBox.prototype.fetchData = function () {
  };

  return CPUTableBox;

}());
