var OSV = OSV || {};

OSV.Boxes.MemoryBox = (function() {

  function CPUBox() {

  }

  CPUBox.prototype = new OSv.Boxes.GraphBox();

  CPUBox.prototype.fetchData = function() {

  };

  return CPUBox;
  
}())