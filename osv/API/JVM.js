var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.JVM = (function() {

  var apiGETCall = helpers.apiGETCall,
    version = apiGETCall("/jvm/version"),
    HeapMemoryUsed = function () {
      return apiGETCall("/jolokia/read%2Fjava.lang%3Atype%3DMemory%2FHeapMemoryUsage%2Fused")().then(function (res) {
        return res.value;
      })
    },
    classesCount = function () {
      return apiGETCall("/jolokia/read/java.lang:type=ClassLoading")().then(function (res) {
        return res.value.TotalLoadedClassCount;
      })
    },
    threadsCount = function () {
      return apiGETCall("/jolokia/read/java.lang:type=Threading/ThreadCount")().then(function (res) {
        return res.value;
      })
    },
    exists = apiGETCall("/jvm/version");

  return { 
    version: version,
    HeapMemoryUsed: HeapMemoryUsed,
    classesCount: classesCount,
    threadsCount: threadsCount
  };

}());
