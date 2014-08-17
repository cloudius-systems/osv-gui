var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.TraceList = (function() {

  function TraceList() {
  }


  TraceList.prototype = new OSv.Boxes.StaticBox();

  TraceList.prototype.template = "/osv/templates/boxes/TraceList.html";

  TraceList.prototype.filter = function(keyword) {
    $('[data-tracepoint-name]').each(function () {
      var $trace = $(this);
      if ($trace.html().indexOf(keyword) == -1) {
        $trace.hide();
      } else {
        $trace.show();
      }
    })
  };
  
  TraceList.prototype.fetchData = function () {
    return OSv.API.Trace.all(function (args) {
      return args;
    })
  };

  return TraceList;
}());
