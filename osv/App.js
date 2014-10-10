var BaseHandler = require("./PageHandlers/BaseHandler"),
    MainHandler = require("./PageHandlers/Dashboard/Main"),
    ThreadsHandler = require("./PageHandlers/Dashboard/Threads"),
    TracesHandler = require("./PageHandlers/Dashboard/Traces"),
    JVMHandler = require("./PageHandlers/Dashboard/JVM"),
    CassandraHandler = require("./PageHandlers/Dashboard/Cassandra"),
    TomcatHandler = require("./PageHandlers/Dashboard/Tomcat"),
    SwaggerHandler = require("./PageHandlers/Swagger");


module.exports = Davis(function() {
  var 
    baseHandler = new BaseHandler(),
    mainHandler = new MainHandler(),
    threadsHandler = new ThreadsHandler(),
    tracesHandler = new TracesHandler(),
    jvmHandler = new JVMHandler(),
    cassandraHandler = new CassandraHandler(),
    tomcatHandler = new TomcatHandler(),
    runRoute = new CustomEvent('runRoute'),
    swaggerHandler = new SwaggerHandler();

  this.configure(function() {
    this.generateRequestOnPageLoad = true;
  });

  this.get("/dashboard", function() {
    mainHandler.handler();
  });

  this.get("/dashboard/threads", function() {
    threadsHandler.handler();
  });

  this.get("/dashboard/traces", function() {
    tracesHandler.handler();
  });

  this.get("/dashboard/cassandra", function() {
    cassandraHandler.handler();
  });

  this.get("/dashboard/jvm", function() {
    jvmHandler.handler();
  });

  this.get("/dashboard/tomcat", function() {
    tomcatHandler.handler();
  });

  this.get("/dashboard/swagger", function() {
    swaggerHandler.handler();
  });
  
  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
