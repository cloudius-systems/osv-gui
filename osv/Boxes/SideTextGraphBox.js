var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.SideTextGraphBox = (function() {

  function SideTextGraphBox() {

  }

  SideTextGraphBox.prototype = new OSv.Boxes.GraphBox();

  SideTextGraphBox.prototype.template = "/osv/templates/boxes/SideTextGraphBox.html";

  SideTextGraphBox.prototype.sideTextTemplate = "/osv/templates/boxes/SideText.html"

  SideTextGraphBox.prototype.getSideText = function () {
    return [];
  };

  SideTextGraphBox.prototype.getSideTextTemplate = function() {
    var source = $("[data-template-path='" + this.sideTextTemplate + "']").html(),
      template = Handlebars.compile(source);

    return template;
  };

  SideTextGraphBox.prototype.onUpdate = function () {
    var html = this.getSideTextTemplate()(this.getSideText());
    $("#" + this.selector).find('.sideTextContainer').html(html);
  };

  return SideTextGraphBox;

}());
