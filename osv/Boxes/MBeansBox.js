var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.MBeansBox = (function() {

  function MBeansBox() {
  }

  MBeansBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  MBeansBox.prototype.template = "/osv/templates/boxes/MBeansBox.html";

  MBeansBox.prototype.fetchData = function () {
    console.log('fetching')
    return OSv.API.Jolokia.MBeans.tree().then(function (res) {
      console.log(res);
      return res;
    });
  };

  MBeansBox.prototype.toggleList = function(event) {
    var $el = $(event.currentTarget),
      $nextEl = $el.next();
  
    if ($nextEl.is("ul")) {
      $nextEl.toggleClass("hidden")
      $el.toggleClass("opened")
    }
  };

  MBeansBox.prototype.postRender = function() {
    $(document).on("click", ".MBeans li", this.toggleList);
  };

  return MBeansBox;

}());
