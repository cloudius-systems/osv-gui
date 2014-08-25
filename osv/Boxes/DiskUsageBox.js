var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.DiskUsageBox = (function() {

  function DiskUsageBox() {
  }

  DiskUsageBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  DiskUsageBox.prototype.template = "/osv/templates/boxes/EmptyBox.html";

  DiskUsageBox.prototype.postRender = function() {
    var self = this;
    OSv.API.FS.free().then(function (free) {
      jQuery.jqplot (self.selector.replace("#",""),  
        [
          [            
            ['Free', free], 
            ['Full', 100-free]
          ]
        ], 
        { 
          title: "Disk Usage",
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
