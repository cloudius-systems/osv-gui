var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.Trace = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    all,
    counts,
    addTrace,
    deleteTrace,
    deleteDuplicates,
    lastCounts = {};

  deleteDuplicates = function(tracepoints) {
    return tracepoints.reduce(function (acc, point) {
        if (acc[ point.name ]) return acc;
        acc[ point.name ] = point;
        return acc;
    }, {})
  }

  all = function() {
    return apiGETCall("/trace/status")().then(deleteDuplicates);
  };


  counts = function () {
    return apiGETCall("/trace/count")().then(function (res) {

      res.list = deleteDuplicates(res.list.map(function (point){
          var lastCount = lastCounts[ point.name ] || point.count ;
          point.change = point.count - lastCount;
          lastCounts[ point.name ] = point.count;
          return point;
      }));

      return res;
    });
  };

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
