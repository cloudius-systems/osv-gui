var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.Trace = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    all,
    counts,
    addTrace,
    deleteTrace;

  all = function() {
    return apiGETCall("/trace/status")().then(function (tracepoints) {
      return tracepoints.reduce(function (acc, point) {
        if (acc[ point.name ]) return acc;
        acc[ point.name ] = point;
        return acc;
      }, {})
    });
  };


  counts = apiGETCall("/trace/count");

  addTrace = function (id) {
    return apiPOSTCall("/trace/count/"+id)({
        enabled: true
    });
  };

  deleteTrace = function (id) {
    return apiPOSTCall("/trace/count/"+id)({
      enabled: false
    });
  }

  return { 
    all: all, 
    counts: counts,
    addTrace: addTrace,
    deleteTrace: deleteTrace
  };

}());
