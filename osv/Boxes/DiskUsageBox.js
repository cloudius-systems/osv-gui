var BaseBox = require("./BaseBox"),
    FS = require("../API/FS");

function DiskUsageBox() {
}

DiskUsageBox.prototype = Object.create(BaseBox.prototype);

DiskUsageBox.prototype.template = "/osv/templates/boxes/GraphBox.html";

DiskUsageBox.prototype.fetchData = function() {
  return $.Deferred().resolve({title: "Disk Usage"});
};

DiskUsageBox.prototype.postRender = function() {
  var self = this;
  FS.free().then(function (free) {
    jQuery.jqplot (self.selector.replace("#","") + " .jqplot",  
      [
        [            
          ['Free', free], 
          ['Full', 100-free]
        ]
      ], 
      { 
        seriesDefaults: {
          renderer: jQuery.jqplot.PieRenderer, 
          rendererOptions: {
            showDataLabels: true
          }
        }, 
        legend: { show:true, location: 'e' }
      }
    );

  });
};

module.exports = DiskUsageBox;
