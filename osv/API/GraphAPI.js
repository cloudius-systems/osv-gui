var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.GraphAPI = (function() {
  
  function GraphAPI (path) {
    this.path = path;
    this.data = [];
    this.startPulling();
  };

  GraphAPI.prototype.formatResponse = function (response) {
    return [ Date.now(), response / Math.pow(1024, 2) ];
  };

  GraphAPI.prototype.fetchData = function() {
    var self = this,
      path = OSv.Settings.BasePath + this.path;

    $.get(path).then(this.formatResponse).then(function (res) {
      self.data.push(res)
    });
  };

  GraphAPI.prototype.getData = function() {
    return this.data.slice( -1 * OSv.Settings.Graph.MaxTicks);
  };

  GraphAPI.prototype.startPulling = function() {
    setInterval(this.fetchData.bind(this), OSv.Settings.DataFetchingRate);
  };

  return GraphAPI;

}());
