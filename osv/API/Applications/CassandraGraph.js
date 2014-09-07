var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraGraph = (function () {

  function CassandraGraph() {

  }

  CassandraGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 1000);
  };

  CassandraGraph.prototype.normalizePlotTimestamps = function (point) {
    if (point.length != 2) return point;
    return [point[0] * 1000, point[1]]
  };

  CassandraGraph.prototype.safePlot = function (plot) {
    return (plot.length > 0 ? plot : [[]]).slice(-20).map(this.normalizePlotTimestamps);
  };
  
  return CassandraGraph;

}());
