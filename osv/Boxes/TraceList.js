var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.TraceList = (function() {

  function TraceList() {
  }

  TraceList.prototype = new OSv.Boxes.StaticBox();

  TraceList.prototype.template = "/osv/templates/boxes/TraceList.html";

  TraceList.prototype.fetchData = function () {
    return OSv.API.Trace.all(function (args) {
      console.log(args);
      return args;
    })
  };

  return TraceList;
}());
