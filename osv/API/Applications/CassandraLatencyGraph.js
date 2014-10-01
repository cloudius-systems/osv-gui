var Jolokia = require("../Jolokia"),
  Cassandra = require("./Cassandra"),
  apiGETCall = require("../../helpers").apiGETCall;

function CassandraLatencyGraph() {
  var self = this;
  Cassandra.ifIsRunning().then(function (isRunning) {
    if (isRunning) self.startPulling();
  });
}

CassandraLatencyGraph.prototype.range = [];

CassandraLatencyGraph.prototype.read = [];

CassandraLatencyGraph.prototype.write = [];

CassandraLatencyGraph.prototype.pullData = function () {
  if (window.globalPause) return;
  var self = this;
  $.when(
    Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentRangeLatencyMicros"),
    Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentReadLatencyMicros"),
    Jolokia.read("org.apache.cassandra.db:type=StorageProxy/RecentWriteLatencyMicros")
  ).then(function (range, read, write) {
    self.range.push([range.timestamp, range.value])
    self.read.push([read.timestamp, read.value])
    self.write.push([write.timestamp, write.value])
  })
};

CassandraLatencyGraph.prototype.getData = function() {
  return [
    (this.range.length > 0? this.range : [[]]).slice(-9),
    (this.read.length > 0? this.read : [[]]).slice(-9),
    (this.write.length > 0? this.write : [[]]).slice(-9),
  ]
}
CassandraLatencyGraph.prototype.startPulling = function () {
  this.interval = setInterval(this.pullData.bind(this), 2000);
};

var singleton = new CassandraLatencyGraph();

module.exports = singleton;
