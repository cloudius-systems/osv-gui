
//FILE: osv/helpers.js
window.helpers = (function() {

  var whenAll,
    renderTemplate,
    humanReadableByteSize,
    apiGETCall,
    apiPOSTCall;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
  
  Handlebars.registerHelper('log', function(msg) {
    console.log(msg);
  });
  
  Handlebars.registerHelper('if_contains', function(array, needle, options) {
    return array.indexOf(needle|0) != -1 ? options.fn(this) : "";
  });

  randomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
      color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  /**
   * Takes multiple promises and returns one promise that resolves to an array.
   * Solution taken from: http://stackoverflow.com/questions/5627284/pass-in-an-array-of-deferreds-to-when
   */
  whenAll = function(deferreds) {
    var deferred = new jQuery.Deferred();
    $.when.apply(jQuery, deferreds).then(
      function() {
        deferred.resolve(Array.prototype.slice.call(arguments));
      },
      function() {
        deferred.fail(Array.prototype.slice.call(arguments));
      });

    return deferred;
  };

  renderTemplate = function(templatePath, context, container) {
    var source = $("[data-template-path='" + templatePath + "']").html(),
      template = Handlebars.compile(source),
      html = template(context);

    container.html(html);
  };

  humanReadableByteSize = function(bytes, percision) {
    var unit = 1024,
      exp,
      size;

    percision = percision || 1;
    if (bytes < unit) {
      return bytes + "B";
    }
    exp = parseInt( Math.log(bytes) / Math.log(unit), 10)
    size = "KMGTP".charAt(exp - 1);
    return ( bytes / Math.pow(unit, exp)).toFixed(percision) + size;
  };

  apiGETCall = function(path) {
    return function() {
      return $.get(OSv.Settings.BasePath + path).then(function (response) {
        return typeof response == "string"? JSON.parse(response) : reesponse;
      })
    };
  }

  apiPOSTCall = function(path) {
    return function(data) {
      return $.post(OSv.Settings.BasePath + path, data);
    }
  }

  return {
    humanReadableByteSize: humanReadableByteSize,
    whenAll: whenAll,
    renderTemplate: renderTemplate,
    apiPOSTCall: apiPOSTCall,
    apiGETCall: apiGETCall,
    randomColor: randomColor
  }

}());
//FILE: osv/Settings.js
var OSv = OSv || {};

OSv.Settings = {

  BasePath: "http://192.168.122.89:8000",

  DataFetchingRate: 2000,

  Graph: {
    MaxTicks: 20
  }
};
//FILE: osv/API/GraphAPI.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.GraphAPI = (function() {
  
  function GraphAPI (path, formatter) {
    this.path = path;
    this.data = [];
    this.startPulling();
    if (formatter) {
      this.formatResponse = formatter;
    }
  };

  GraphAPI.prototype.formatResponse = function (response) {
    return [ Date.now(), response / Math.pow(1024, 2) ];
  };

  GraphAPI.prototype.fetchData = function() {
    var self = this,
      path = OSv.Settings.BasePath + this.path;

    $.get(path)
     .then(function (response) {
       return typeof response == "string"? JSON.parse(response) : response;
     })
     .then(this.formatResponse.bind(this)).then(function (res) {
       self.data.push(res)
    });
  };

  GraphAPI.prototype.getData = function() {
    return this.data.slice( -1 * OSv.Settings.Graph.MaxTicks);
  };

  GraphAPI.prototype.startPulling = function() {
    this.fetchData();
    setInterval(this.fetchData.bind(this), OSv.Settings.DataFetchingRate);
  };

  return GraphAPI;

}());
//FILE: osv/API/ThreadsGraphAPI.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.ThreadsGraphAPI = (function() {

  function ThreadsGraphAPI() {
    this.path = "/os/threads";
    this.data = [];
    this.startPulling();
  };
  
  ThreadsGraphAPI.prototype = Object.create(OSv.API.GraphAPI.prototype);

  ThreadsGraphAPI.prototype.prevTime = {};

  ThreadsGraphAPI.prototype.timems = 0;

  ThreadsGraphAPI.prototype.idles = {};

  ThreadsGraphAPI.prototype.threads = {};

  ThreadsGraphAPI.prototype.names = {};

  ThreadsGraphAPI.prototype.formatResponse = function (threads) { 

    var timestamp = Date.now(),
      self = this,
      parsedThreads,
      newTimems = threads.time_ms,
      diff = {},
      idles = {};

    threads.list.forEach(function (thread) {
      
      self.names[ thread.id ] = thread.name; 

      if (self.timems) {
        diff[ thread.id ] = thread.cpu_ms - self.prevTime[ thread.id ];
      }
      
      self.prevTime[ thread.id ] = thread.cpu_ms;  

      if ( thread.name.indexOf("idle") != -1 && self.timems) {
        idles[ thread.id ] = {
          diff: diff[ thread.id ],
          id: thread.id,
          name: thread.name,
          cpu_ms: thread.cpu_ms
        };
      }

    });

    $.map(idles, function (idle) {
      
      self.idles[ idle.id ] = self.idles[ idle.id ] || idle;

      var percent =(100 - (100 * idle.diff) / (newTimems - self.timems));

      self.idles[ idle.id ].cpu_ms = idle.cpu_ms; 
      
      self.idles[ idle.id ].plot = self.idles[ idle.id ].plot || [];

      self.idles[ idle.id ].plot.push([ timestamp,  percent]);

    })

    $.map(diff, function (val, key) {
      return [[key, val]]
    }).sort(function (t1, t2) {
      return t1[1] > t2[1] ? -1 : 1;
    }).forEach(function (diff) {
      var id = diff[0]|0;
      
      var percent = (100 * diff[1]) / (newTimems - self.timems);
      if (!self.threads[ id ]) {
        self.threads[ id ] = {id : id, name: self.names[ id ], plot: [] }
      }

      self.threads[ id ].plot.push([
        timestamp,
        percent
      ])

    });

    self.timems = newTimems;

  };

  ThreadsGraphAPI.prototype.getThreads = function() {
    return this.threads;
  };

  ThreadsGraphAPI.prototype.averageCpus = function(cpus) {
    cpus = $.map(cpus, function (cpu) { return cpu; })
    var plotLength = cpus[0].plot.length,
        cpusCount = cpus.length,
        averagePlot = [],
        point = [],
        pointsSum,
        pointAvarge,
        timestamp;

    for (var plotIdx = 0; plotIdx < plotLength - 1; plotIdx++) {
      timestamp = cpus[0].plot[plotIdx][0];
      sum = 0;
      for (var cpuIdx = 0; cpuIdx < cpusCount - 1; cpuIdx++) {
        sum += cpus[cpuIdx].plot[plotIdx][1]
      }
      pointAvarge = sum / cpusCount;
      averagePlot.push([ timestamp, pointAvarge ]);
    }

    return averagePlot;
  };

  ThreadsGraphAPI.prototype.hasCPUData = function() {
    return Object.keys(this.data).length > 1;
  }
  ThreadsGraphAPI.prototype.getCpuAvergae = function() {
    return this.hasCPUData() ? this.averageCpus(this.idles) : [];
  };

  ThreadsGraphAPI.prototype.getData = function () {
    return $.Deferred().resolve(this.getThreads());
  };

  ThreadsGraphAPI.prototype.getCpu = function () {
    return this.idles;
  };

  return ThreadsGraphAPI;

}());
//FILE: osv/API/GraphAPI.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.GraphAPI = (function() {
  
  function GraphAPI (path, formatter) {
    this.path = path;
    this.data = [];
    this.startPulling();
    if (formatter) {
      this.formatResponse = formatter;
    }
  };

  GraphAPI.prototype.formatResponse = function (response) {
    return [ Date.now(), response / Math.pow(1024, 2) ];
  };

  GraphAPI.prototype.fetchData = function() {
    var self = this,
      path = OSv.Settings.BasePath + this.path;

    $.get(path)
     .then(function (response) {
       return typeof response == "string"? JSON.parse(response) : response;
     })
     .then(this.formatResponse.bind(this)).then(function (res) {
       self.data.push(res)
    });
  };

  GraphAPI.prototype.getData = function() {
    return this.data.slice( -1 * OSv.Settings.Graph.MaxTicks);
  };

  GraphAPI.prototype.startPulling = function() {
    this.fetchData();
    setInterval(this.fetchData.bind(this), OSv.Settings.DataFetchingRate);
  };

  return GraphAPI;

}());
//FILE: osv/API/OS.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.OS = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    GraphAPI = OSv.API.GraphAPI,
    ThreadsGraphAPI = OSv.API.ThreadsGraphAPI,
    freeMemoryGraph = new GraphAPI("/os/memory/free"),
    totalMemoryGraph = new GraphAPI("/os/memory/total"),
    threadsGraph;

  threadsGraph = new ThreadsGraphAPI(); 

  return { 
    version: apiGETCall("/os/version"),
    manufactor: apiGETCall("/os/manufactor"),
    uptime: apiGETCall("/os/uptime"),
    date: apiGETCall("/os/date"),
    Memory: {
      total: apiGETCall("/os/memory/total"),
      free: apiGETCall("/os/memory/free"),
      History: {
        total: totalMemoryGraph.getData.bind(totalMemoryGraph),
        free: freeMemoryGraph.getData.bind(freeMemoryGraph)
      }
    },
    shutdown: apiPOSTCall("/os/shutdown"),
    dmesg: apiGETCall("/os/dmesg"),
    getHostname: apiGETCall("/os/hostname"),
    setHostname: apiPOSTCall("/os/hostname"),
    threads: apiGETCall("/os/threads"),
    threadsGraph: threadsGraph.getData.bind(threadsGraph),
    CPUAverage: threadsGraph.getCpuAvergae.bind(threadsGraph),
    CPU: threadsGraph.getCpu.bind(threadsGraph)
  };

}());
//FILE: osv/API/ThreadsGraphAPI.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.ThreadsGraphAPI = (function() {

  function ThreadsGraphAPI() {
    this.path = "/os/threads";
    this.data = [];
    this.startPulling();
  };
  
  ThreadsGraphAPI.prototype = Object.create(OSv.API.GraphAPI.prototype);

  ThreadsGraphAPI.prototype.prevTime = {};

  ThreadsGraphAPI.prototype.timems = 0;

  ThreadsGraphAPI.prototype.idles = {};

  ThreadsGraphAPI.prototype.threads = {};

  ThreadsGraphAPI.prototype.names = {};

  ThreadsGraphAPI.prototype.formatResponse = function (threads) { 

    var timestamp = Date.now(),
      self = this,
      parsedThreads,
      newTimems = threads.time_ms,
      diff = {},
      idles = {};

    threads.list.forEach(function (thread) {
      
      self.names[ thread.id ] = thread.name; 

      if (self.timems) {
        diff[ thread.id ] = thread.cpu_ms - self.prevTime[ thread.id ];
      }
      
      self.prevTime[ thread.id ] = thread.cpu_ms;  

      if ( thread.name.indexOf("idle") != -1 && self.timems) {
        idles[ thread.id ] = {
          diff: diff[ thread.id ],
          id: thread.id,
          name: thread.name,
          cpu_ms: thread.cpu_ms
        };
      }

    });

    $.map(idles, function (idle) {
      
      self.idles[ idle.id ] = self.idles[ idle.id ] || idle;

      var percent =(100 - (100 * idle.diff) / (newTimems - self.timems));

      self.idles[ idle.id ].cpu_ms = idle.cpu_ms; 
      
      self.idles[ idle.id ].plot = self.idles[ idle.id ].plot || [];

      self.idles[ idle.id ].plot.push([ timestamp,  percent]);

    })

    $.map(diff, function (val, key) {
      return [[key, val]]
    }).sort(function (t1, t2) {
      return t1[1] > t2[1] ? -1 : 1;
    }).forEach(function (diff) {
      var id = diff[0]|0;
      
      var percent = (100 * diff[1]) / (newTimems - self.timems);
      if (!self.threads[ id ]) {
        self.threads[ id ] = {id : id, name: self.names[ id ], plot: [] }
      }

      self.threads[ id ].plot.push([
        timestamp,
        percent
      ])

    });

    self.timems = newTimems;

  };

  ThreadsGraphAPI.prototype.getThreads = function() {
    return this.threads;
  };

  ThreadsGraphAPI.prototype.averageCpus = function(cpus) {
    cpus = $.map(cpus, function (cpu) { return cpu; })
    var plotLength = cpus[0].plot.length,
        cpusCount = cpus.length,
        averagePlot = [],
        point = [],
        pointsSum,
        pointAvarge,
        timestamp;

    for (var plotIdx = 0; plotIdx < plotLength - 1; plotIdx++) {
      timestamp = cpus[0].plot[plotIdx][0];
      sum = 0;
      for (var cpuIdx = 0; cpuIdx < cpusCount - 1; cpuIdx++) {
        sum += cpus[cpuIdx].plot[plotIdx][1]
      }
      pointAvarge = sum / cpusCount;
      averagePlot.push([ timestamp, pointAvarge ]);
    }

    return averagePlot;
  };

  ThreadsGraphAPI.prototype.hasCPUData = function() {
    return Object.keys(this.data).length > 1;
  }
  ThreadsGraphAPI.prototype.getCpuAvergae = function() {
    return this.hasCPUData() ? this.averageCpus(this.idles) : [];
  };

  ThreadsGraphAPI.prototype.getData = function () {
    return $.Deferred().resolve(this.getThreads());
  };

  ThreadsGraphAPI.prototype.getCpu = function () {
    return this.idles;
  };

  return ThreadsGraphAPI;

}());
//FILE: osv/Boxes/BaseBox.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.BaseBox = (function() {

  function BaseBox() {
  }

  BaseBox.prototype.template = "/osv/templates/boxes/BaseBox.html";

  BaseBox.prototype.fetchData = function() {
    return $.Deferred().resolve();
  };

  BaseBox.prototype.getTemplate = function() {
    var source = $("[data-template-path='" + this.template + "']").html(),
      template = Handlebars.compile(source);

    return template;
  };

  BaseBox.prototype.getHtml = function() {

    var template = this.getTemplate();

    return this.fetchData().then(function(data) {
      return template(data);
    });
  };

  return BaseBox;

}());
//FILE: osv/Boxes/StaticBox.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.StaticBox = (function() {

  function StaticBox() {
  }

  StaticBox.prototype = Object.create(OSv.Boxes.BaseBox.prototype);

  StaticBox.prototype.template = "/osv/templates/boxes/StaticBox.html";

  return StaticBox;

}());
//FILE: osv/Boxes/StaticInfo.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.StaticInfo = (function() {

  function StaticInfo() {

  }

  StaticInfo.prototype = new OSv.Boxes.StaticBox();

  StaticInfo.prototype.getData = function() {
    var OS = OSv.API.OS;
    return $.when(
      OS.getHostname(),
      OS.Memory.total(),
      OS.Memory.free(),
      OS.uptime(),
      OS.version()
    );
  };

  StaticInfo.prototype.parseData = function(hostname, totalMemory, freeMemory, uptime, version) {
    return [
      { key: "Host name", value: hostname },
      { key: "Memory Total", value: totalMemory },
      { key: "Memory Free", value: freeMemory },
      { key: "Uptime", value: uptime },
      { key: "OSv version", value: version }
    ];
  };

  StaticInfo.prototype.fetchData = function() {
    return this.getData().then(this.parseData);
  };

  return StaticInfo;
}());
//FILE: osv/Boxes/GraphBox.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.GraphBox = (function() {

  function GraphBox() {

  }

  GraphBox.prototype = new OSv.Boxes.BaseBox();

  GraphBox.prototype.baseSettings = function() {
    return {
      highlighter: {
            show: true,
            sizeAdjust: 7.5
        },
        legend: {
          show: true,
            location: "nw",
            xoffset: 12,
            yoffset: 12
        }
    }
  };

  GraphBox.prototype.extraSettings = function() {
    return {};
  };

  GraphBox.prototype.getSettings = function() {
    return $.extend(this.baseSettings(), this.extraSettings())
  };

  GraphBox.prototype.title = "Graph";

  GraphBox.prototype.template = "/osv/templates/boxes/GraphBox.html";

  GraphBox.prototype.getHtml = function() {
    var template = this.getTemplate(),
      context = { title: this.title },
      html = template(context);

    return html;
  };

  GraphBox.prototype.fetchData = function() {
    return $.Deferred().resolve([ [ null ] ]);
  };

  GraphBox.prototype.renderGraph = function(selector, setATimeout) {
    var self = this;
    selector = selector || this.selector;
    this.selector = selector;
    this.fetchData().then(function(data) {
      if (self.plot) {
        self.plot.destroy();
      }
      self.plot = $.jqplot(selector, data, self.getSettings());
    });

    if (setATimeout !== false) {
      this.timeout = setTimeout(function() { self.renderGraph(selector) }, OSv.Settings.DataFetchingRate);
    }
  };

  GraphBox.prototype.clear = function () {
    clearTimeout(this.timeout)
    $(this.selector).remove();
  };

  GraphBox.prototype.postRender = function(selector) {
    this.selector = selector;
    this.renderGraph(selector);
  };

  return GraphBox;
}());
//FILE: osv/Boxes/ThreadsGraph.js
var OSv = OSv || {};

OSv.Boxes.ThreadsGraph = (function() {

  function ThreadsGraph() {
    for (var i = 0; i < 256; i++) {
      this.colors[i] = helpers.randomColor();
    }
  }

  ThreadsGraph.prototype = new OSv.Boxes.GraphBox();

  ThreadsGraph.prototype.visibleThreads = []
  ThreadsGraph.prototype.threads = [];
  ThreadsGraph.prototype.colors = {};
  ThreadsGraph.prototype.extraSettings = function() {
    var self = this;
    return {
      title: "THREADS",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        }
      },
    series: this.threads.map(function (thread) {
        return {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          color: self.colors[ thread.id ],
          label: thread.id + " - " + thread.name,
          size: 1
        }
      }),
    }
  };

  ThreadsGraph.prototype.normalizeData = function(data) {
    var self = this,
      plots;
    
    this.threads = $.map(data, function (thread) { 
      return thread; 
    }).filter(function (thread) {
      return self.visibleThreads.indexOf(thread.id) != -1;
    });
    
    plots = this.threads.map(function (thread) {
      return thread.plot.slice(-1 * OSv.Settings.Graph.MaxTicks);
    })

    if (plots.length === 0) {
      plots =[ [ null ] ]
    } 

    return plots;
  };

  ThreadsGraph.prototype.fetchData = function() {
    var self = this;
    return OSv.API.OS.threadsGraph().then(function(threadsData) {
      return self.normalizeData(threadsData);
    });
  };

  return ThreadsGraph;

}());//FILE: osv/Layouts/BoxesLayout.js
var OSv = OSv || {};
OSv.Layouts = OSv.Layouts || {};

OSv.Layouts.BoxesLayout = (function() {

  function BoxesLayout(boxes) {
    this.boxes = boxes;
    this.layoutContainerID = "dashboard";
    this.mainContainer = $("#main");
    document.addEventListener("runRoute", this.clear.bind(this))
  }

  BoxesLayout.prototype.clear = function () {
    this.deleteLayoutContainer();
    this.boxes && this.boxes.map(function (box) { box.clear && box.clear(); })
  };

  BoxesLayout.prototype.layoutContainer = function() {
    return "<div id='"+this.layoutContainerID+"' class='row'>";
  };

  BoxesLayout.prototype.getLayoutContainer = function() {
    return $("#"+this.layoutContainerID);
  };

  BoxesLayout.prototype.allBoxesHtml = function (){
    return this.boxes.map(function(box) {
      return box.getHtml();
    });
  };

  BoxesLayout.prototype.deleteLayoutContainer = function() {
    this.getLayoutContainer().remove();
  };

  BoxesLayout.prototype.renderBoxHtml = function(html, id) {
    var uniuqeID = "Box" + id,
      $html = $(html).attr("id", uniuqeID);

    this.getLayoutContainer().append($html);
    this.boxes[id].selector = "#" + uniuqeID;
    if (this.boxes[id].postRender) {
      this.boxes[id].postRender(uniuqeID);
    }
  };


  BoxesLayout.prototype.render = function() {
    var self = this;

    this.deleteLayoutContainer();
    this.mainContainer.append(this.layoutContainer());

    return helpers.whenAll( this.allBoxesHtml() ).then(function(boxesHtml) {
      boxesHtml.forEach(self.renderBoxHtml.bind(self));
    });
  };

  return BoxesLayout;

}());
//FILE: osv/Layouts/ThreadsLayout.js
var OSv = OSv || {};
OSv.Layouts = OSv.Layouts || {};

OSv.Layouts.ThreadsLayout = (function() {
  
  var Boxes = OSv.Boxes;

  function ThreadsLayout() {
    OSv.Layouts.BoxesLayout.apply(this, arguments);
    this.setSelectedThreads();
    this.threadsGraph = new Boxes.ThreadsGraph();
    this.boxes = [ new Boxes.ThreadsTableBox(), this.threadsGraph ]

    $(document).on("change", "[data-thread] input", this.onCheckBoxChange.bind(this))

    this.refreshTable();
    this.interval = setInterval(this.refreshTable.bind(this), 2000);
  }


  ThreadsLayout.prototype = new OSv.Layouts.BoxesLayout();
  
  ThreadsLayout.prototype.setSelectedThreads = function () {
    var self = this;
    return OSv.API.OS.threads().then(function (threads) {
      self.threadsGraph.visibleThreads = threads.list.sort(function (thread1, thread2) {
        return thread1.cpu_ms > thread2.cpu_ms ? -1 : 1;
      }).map(function (thread) { 
        return thread.id|0;
      }).slice(0, 9);
    })
  }

  ThreadsLayout.prototype.clear = function() {
    OSv.Layouts.BoxesLayout.prototype.clear.apply(this, arguments);
    clearInterval(this.interval)
  };

  ThreadsLayout.prototype.getSelectedThreads = function() {
    return this.threadsGraph.visibleThreads;
  };

  ThreadsLayout.prototype.showThread = function(threadID) {
    this.threadsGraph.visibleThreads.push(threadID|0);
  };

  ThreadsLayout.prototype.hideThread = function(threadID) {
    this.threadsGraph.visibleThreads = this.threadsGraph.visibleThreads.filter(function (thread) { 
      return thread != threadID
    });
  };

  ThreadsLayout.prototype.refreshTable = function () {
    var visibleThreads = this.threadsGraph.visibleThreads;
    this.boxes[0].refresh(this.getSelectedThreads());
  };

  ThreadsLayout.prototype.refreshGraph = function() {
    this.threadsGraph.renderGraph(false, false)
  };
  
  ThreadsLayout.prototype.onCheckBoxChange = function(event) {
    var $checkbox = $(event.target),
      threadID = $checkbox.attr("data-thread-id")|0;
    
    $checkbox.is(":checked") ? this.showThread(threadID) : this.hideThread(threadID);
    this.refreshGraph();
  };

  return ThreadsLayout;

}());
//FILE: osv/Boxes/ThreadsTableBox.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.ThreadsTableBox = (function() {

  function ThreadsTableBox() {
  }

  ThreadsTableBox.prototype = new OSv.Boxes.StaticBox();

  ThreadsTableBox.prototype.template = "/osv/templates/boxes/ThreadsTable.html";

  ThreadsTableBox.prototype.refresh = function (selected) {
    var self = this;
    this.fetchData().then(function (ctx) {
      ctx.selected = selected;
      var tmpl =  self.getTemplate();
      return tmpl(ctx);
    }).then(function ($html) {
      var boxContaienr = $("#Box0");
      boxContaienr.html($html);
    })
  };

  ThreadsTableBox.prototype.fetchData = function () {
    return OSv.API.OS.threadsGraph().then(function (threads) {
      
      var threads = $.map(threads, function (thread, id) {
        return {
          name: thread.name,
          id: id,
          percent: thread.plot[thread.plot.length - 1][1].toFixed(1)
        }
      }).sort(function(t1, t2) {
        return t1.percent > t2.percent ? -1 : 1;
      })
      
      return { 
          threads: threads, 
          selected: threads.map(function (thread) { return thread.id}).slice(0,9) 
        }
    })
  };

  return ThreadsTableBox;

}());
//FILE: osv/Boxes/CPUBox.js
var OSv = OSv || {};

OSv.Boxes.CPUBox = (function() {

  function CPUBox() {

  }

  CPUBox.prototype = new OSv.Boxes.GraphBox();

  CPUBox.prototype.cpus = [];

  CPUBox.prototype.extraSettings = function() {
    return {
      title: "CPU",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        }
      },
    series: [{
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "CPU Usage %",
          size: 1
      }]
    }
  };

  CPUBox.prototype.fetchData = function() {
    var cpuData = OSv.API.OS.CPUAverage();
    var plots = cpuData.slice(-1 * OSv.Settings.Graph.MaxTicks )
    if (plots.length == 0) {
      plots = [ null ];
    } 
    return $.Deferred().resolve([ plots ]);
  };

  return CPUBox;

}());//FILE: osv/Boxes/MemoryBox.js
var OSv = OSv || {};

OSv.Boxes.MemoryBox = (function() {

  function MemoryBox() {

  }

  MemoryBox.prototype = new OSv.Boxes.GraphBox();

  MemoryBox.prototype.title = "Memory";

  MemoryBox.prototype.extraSettings = function() {
    return {
      title: "Memory",
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
          tickOptions: {
            formatString: "%H:%M:%S"
          },
          label: "Time"
        },
        yaxis: {
          tickOptions: {
            formatter: function(foramt, val) {
              return helpers.humanReadableByteSize(val * Math.pow(1024, 2));
            }
          }
        }
      },
      series: [
        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Free",
          size: 1
        },

        {
          lineWidth: 1,
          markerOptions: {
            style: "circle"
          },
          label: "Total"
        }

      ],
    }
  };

  MemoryBox.prototype.fetchData = function() {
    var MemoryHistory = OSv.API.OS.Memory.History,
      free = MemoryHistory.free(),
      total = MemoryHistory.total();

    // If there was no data fetched yet, the graph will break the whole application.
    // this is a workaround.
    if (free.length === 0) {
      free = [ null ];
    }
    if (total.length === 0) {
      total = [ null ];
    }

    return $.Deferred().resolve([ free, total ]);
  };

  return MemoryBox;
}());
//FILE: osv/Boxes/CPUTableBox.js
var OSv = OSv || {};
OSv.Boxes = OSv.Boxes || {};

OSv.Boxes.CPUTableBox = (function() {

  function CPUTableBox() {
    this.interval = setInterval(this.refresh.bind(this), OSv.Settings.DataFetchingRate)
  }

  CPUTableBox.prototype = new OSv.Boxes.StaticBox();

  CPUTableBox.prototype.template = "/osv/templates/boxes/CPUTable.html";

  CPUTableBox.prototype.clear = function() {
    clearInterval(this.interval);
    $(this.selector).remove();
  };

  CPUTableBox.prototype.refresh = function (selected) {
    var container =$(this.selector),
      template = this.getTemplate();

    this.fetchData().then(function (ctx) {
      console.log(ctx)
      container.html(template(ctx))
    });
  };

  CPUTableBox.prototype.fetchData = function () {
    var cpus = OSv.API.OS.CPU();
    if (Object.keys(cpus).length == 0) {
      return $.Deferred().resolve({
        timePoints: [],
        cpus: []
      });
    }
    var parsed = $.map(cpus, function (cpu) {
      cpu.name = cpu.name.replace("idle", "")
      cpu.usage = cpu.plot[ cpu.plot.length - 1 ][1].toFixed(2) + "%";
      cpu.running = cpu.cpu_ms;
      cpu.timeline = cpu.plot.slice(-5).map(function (point) { return "" })
      return cpu;
    });
    var timePoints = parsed[0].plot.map(function (point) {
      var date = new Date(point[0]);
      return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }).slice(-5);
    return $.Deferred().resolve({
      timePoints: timePoints,
      cpus: parsed 
    })
  };

  return CPUTableBox;

}());
//FILE: osv/PageHandlers/Dashboard/Main.js
var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Main = (function() {

  var Boxes = OSv.Boxes;

  function Main() {
  }

  Main.prototype.handler = function() {
    this.layout = new OSv.Layouts.BoxesLayout([
      new Boxes.StaticInfo(), new Boxes.MemoryBox(),
      new Boxes.CPUBox(), new Boxes.CPUTableBox()
    ]);
    this.layout.render();
  };

  return Main;
}());
//FILE: osv/PageHandlers/Dashboard/Threads.js
var OSv = OSv || {};
OSv.PageHandlers = OSv.PageHandlers || {};
OSv.PageHandlers.Dashboard = OSv.PageHandlers.Dashboard || {};

OSv.PageHandlers.Dashboard.Threads = (function() {

  var Boxes = OSv.Boxes;

  function Threads() {
  }

  Threads.prototype.handler = function() {
    this.layout = new OSv.Layouts.ThreadsLayout();
    this.layout.render();
  };

  return Threads;
}());
//FILE: osv/API/OS.js
var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.OS = (function() {

  var apiGETCall = helpers.apiGETCall,
    apiPOSTCall = helpers.apiPOSTCall,
    GraphAPI = OSv.API.GraphAPI,
    ThreadsGraphAPI = OSv.API.ThreadsGraphAPI,
    freeMemoryGraph = new GraphAPI("/os/memory/free"),
    totalMemoryGraph = new GraphAPI("/os/memory/total"),
    threadsGraph;

  threadsGraph = new ThreadsGraphAPI(); 

  return { 
    version: apiGETCall("/os/version"),
    manufactor: apiGETCall("/os/manufactor"),
    uptime: apiGETCall("/os/uptime"),
    date: apiGETCall("/os/date"),
    Memory: {
      total: apiGETCall("/os/memory/total"),
      free: apiGETCall("/os/memory/free"),
      History: {
        total: totalMemoryGraph.getData.bind(totalMemoryGraph),
        free: freeMemoryGraph.getData.bind(freeMemoryGraph)
      }
    },
    shutdown: apiPOSTCall("/os/shutdown"),
    dmesg: apiGETCall("/os/dmesg"),
    getHostname: apiGETCall("/os/hostname"),
    setHostname: apiPOSTCall("/os/hostname"),
    threads: apiGETCall("/os/threads"),
    threadsGraph: threadsGraph.getData.bind(threadsGraph),
    CPUAverage: threadsGraph.getCpuAvergae.bind(threadsGraph),
    CPU: threadsGraph.getCpu.bind(threadsGraph)
  };

}());
//FILE: osv/App.js
var OSv = OSv || {};

OSv.App = Davis(function() {

  var Handlers = OSv.PageHandlers,
    mainHandler = new Handlers.Dashboard.Main(),
    threadsHandler = new Handlers.Dashboard.Threads(),
    runRoute = new CustomEvent('runRoute')

  this.configure(function() {
    this.generateRequestOnPageLoad = true;
  });

  this.get("/dashboard", function() {
    mainHandler.handler();
  });

  this.get("/dashboard/threads", function() {
    threadsHandler.handler();
  });

  this.bind('runRoute', function (data) {
    runRoute.initCustomEvent('runRoute', true, true, data);
    document.dispatchEvent(runRoute);
  })
});
