function Swagger() {}

Swagger.prototype.handler = function () {
  var $iframe = $("<iframe style='border:none' id='osvContainer' src='/dashboard_static/swagger/'>")
  $("#main").append($iframe);
};

module.exports = Swagger;