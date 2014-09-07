var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.JVM = (function() {

  var Boxes = OSv.Boxes;

  function JVM() {
    this.subscribe();
  }

  JVM.prototype.handler = function() {
    this.MBeansBox = new Boxes.MBeansBox();
    this.MBeansAttributesBox = new Boxes.MBeansAttributesBox();
    this.layout = new OSv.Layouts.BoxesLayout([ 
      new OSv.Boxes.JVMStaticInfo(), new OSv.Boxes.GCGraph(),
      new OSv.Boxes.HeapMemoryUsage(), new OSv.Boxes.MemoryPoolGraph(),
      this.MBeansBox, this.MBeansAttributesBox
    ]);
    this.layout.render();
  };

  JVM.prototype.MBeansClicked = function(event) {
    var $li = $(event.currentTarget),
      name = $li.attr("data-rawName");

    $(".MBeans .selected").removeClass("selected");
    $li.addClass("selected");
    this.MBeansAttributesBox.name = name;
    this.MBeansAttributesBox.refresh();
  };

  JVM.prototype.subscribe = function() {
    $(document).on("click", ".MBeans [data-hasAttr]", this.MBeansClicked.bind(this));
  };
  return JVM;
}());
