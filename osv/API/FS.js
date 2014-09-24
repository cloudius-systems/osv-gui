var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.FS = (function() {

  var apiGETCall = helpers.apiGETCall, 
    df = apiGETCall("fs/df/"),
    free;


  free = function() {
    return df().then(function (res) {
      return (res[0].bfree / res[0].btotal) * 100;
    })
  };

  return { 
    free: free
  };

}());
