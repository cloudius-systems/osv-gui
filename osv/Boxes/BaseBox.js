var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.BaseBox = (function() {

  function BaseBox() {
  }

  BaseBox.prototype.template = "/osv/templates/boxes/BaseBox.html";

  BaseBox.prototype.fetchData = function() {
    return $.Deferred().resolve();
  };

  BaseBox.prototype.getTemplate = function() {
    var source = $("[data-template-path='" + this.template + "']").html(),
      template = Handlebars.compile(source);

    return template;
  };

  BaseBox.prototype.getHtml = function() {

    var template = this.getTemplate();

    return this.fetchData().then(function(data) {
      return template(data);
    });
  };

  return BaseBox;

}());
