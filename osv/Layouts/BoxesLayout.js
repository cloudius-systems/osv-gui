var OSv = OSv || {};
OSv.Layouts = OSv.Layouts || {};

OSv.Layouts.BoxesLayout = (function() {

  function BoxesLayout(boxes) {
    this.boxes = boxes;
  }

  BoxesLayout.prototype.render = function() {

    $("#main").append("<div id='dashboard' class='row'>");

    var container = $("#dashboard"),
      promises = [],
      self = this,
      html;

    promises = this.boxes.map(function(box) {
      return box.getHtml();
    });

    return helpers.whenAll(promises).then(function(boxesHtml) {
      var $html,
        uniuqeID;

      container.html("");

      boxesHtml.forEach(function(html, idx) {
        uniuqeID = "Box" + idx;
        $html = $(html);
        $html.attr("id", uniuqeID);
        container.append($html);
        if (self.boxes[idx].postRender) {
          self.boxes[idx].postRender(uniuqeID);
        }
      });

    });
  };

  return BoxesLayout;

}());
