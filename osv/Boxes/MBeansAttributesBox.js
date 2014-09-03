var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.MBeansAttributesBox = (function() {

  function MBeansAttributesBox() {
  }

  MBeansAttributesBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  MBeansAttributesBox.prototype.template = "/osv/templates/boxes/MBeansAttributesBox.html";

  MBeansAttributesBox.prototype.fetchData = function() {
    if (!this.name) return $.Deferred().resolve([])
    return OSv.API.Jolokia.MBeans.attributes(this.name);
  };

  return MBeansAttributesBox;

}());
