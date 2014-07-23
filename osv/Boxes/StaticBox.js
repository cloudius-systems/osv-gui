var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.StaticBox = (function() {

  function StaticBox() {
  }

  StaticBox.prototype.template = "/osv/templates/boxes/StaticBox.html";

  StaticBox.prototype.fetchData = function() {
    return new $.Deferred().resolve();
  };

  StaticBox.prototype.getHtml = function() {
    var source = $("[data-template-path='" + this.template + "']").html(),
      template = Handlebars.compile(source);

    return this.fetchData().then(function(data) {
      return template(data);
    });
  };

  return StaticBox;

}());
