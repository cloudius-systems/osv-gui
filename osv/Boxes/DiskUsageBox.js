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
        seriesColors: [ "#00cc33", "#2553da" ],

         grid: {
            drawGridLines: true,        // wether to draw lines across the grid or not.
            gridLineColor: '#CCCCCC',    // *Color of the grid lines.
            background: '#FFF',      // CSS color spec for background color of grid.
            borderColor: '#CCCCCC',     // CSS color spec for border around grid.
            borderWidth: 0.1,           // pixel width of border around grid.
            shadow: false,               // draw a shadow for grid.
            renderer: $.jqplot.CanvasGridRenderer,  // renderer to use to draw the grid.
            rendererOptions: {}         // options to pass to the renderer.  Note, the default
                                        // CanvasGridRenderer takes no additional options.
        },
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
