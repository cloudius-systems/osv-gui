var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.DiskUsageBox = (function() {

  function DiskUsageBox() {
  }

  DiskUsageBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  DiskUsageBox.prototype.template = "/osv/templates/boxes/GraphBox.html";

  DiskUsageBox.prototype.fetchData = function() {
    return $.Deferred().resolve({title: "Disk Usage"});
  };

  DiskUsageBox.prototype.postRender = function() {
    var self = this;
    OSv.API.FS.free().then(function (free) {
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

  return DiskUsageBox;

}());
