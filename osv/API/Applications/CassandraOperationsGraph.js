var OSv = OSv || {};
OSv.API = OSv.API || {};
OSv.API.Applications = OSv.API.Applications || {};
OSv.API.Applications.CassandraOperationsGraph = (function() {

  var Jolokia = OSv.API.Jolokia,
    apiGETCall = helpers.apiGETCall


  function CassandraOperationsGraph() {
    this.startPulling();
  }

  CassandraOperationsGraph.prototype.reads = [];
  
  CassandraOperationsGraph.prototype.writes = [];
  
  CassandraOperationsGraph.prototype.gossip = [];

  CassandraOperationsGraph.prototype.pullData = function () {
    var self = this;
    $.when(
      Jolokia.read("org.apache.cassandra.internal/type=ReadStage"),
      Jolokia.read("org.apache.cassandra.internal/type=MutationStage"),
      Jolokia.read("org.apache.cassandra.internal/type=GossipStage")
    ).then(function (read, write, gossip) {
      var timestamp = Date.now();
      self.reads.push([timestamp, read])
      self.writes.push([timestamp, write])
      self.gossip.push([timestamp, gossip])
    })
  };

  CassandraOperationsGraph.prototype.startPulling = function () {
    this.interval = setInterval(this.pullData.bind(this), 2000);
  };

  return CassandraOperationsGraph;

}());
