var OSv = OSv || {};

OSv.Boxes.CPUBox = (function() {

  function CPUBox() {

  }

  CPUBox.prototype = new OSv.Boxes.GraphBox();

  CPUBox.prototype.fetchData = function() {

  };

  return CPUBox;

}())