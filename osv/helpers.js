window.helpers = (function() {

  var whenAll,
    renderTemplate,
    humanReadableByteSize,
    apiGETCall,
    apiPOSTCall,
    apiDELETECall,
    averageArray;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;

  Handlebars.registerHelper('stringify', function(json) {
    return JSON.stringify(json);
  });

  Handlebars.registerHelper('log', function(msg) {
    console.log(msg);
  });
  
  Handlebars.registerHelper('if_contains', function(array, needle, options) {
    return array.indexOf(needle|0) != -1 ? options.fn(this) : "";
  });

  Handlebars.registerHelper('if_not_contains', function(array, needle, options) {
    return array.indexOf(needle|0) == -1 ? options.fn(this) : "";
  });

  averageArray = function (arr) {
    var sum = function (n1, n2) { return n1 + n2; }, 
      len = arr.length;

    return arr.reduce(sum) / len;
  };

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

  apiDELETECall = function(path) {
    return function() {
      return $.ajax({
        url: OSv.Settings.BasePath + path,
        type: 'DELETE'
      })
    }
  };

  function DerivativePlot () {
    this.latestValue = null;
    this.latestTimestamp = null;
    this.plot = [];
  };

  DerivativePlot.prototype.add = function (timestamp, value) {
    var latestValue = this.latestValue,
      latestTimestamp = this.latestTimestamp,
      newPlotPoint;

    if (latestValue) {
      newValue = (value - latestValue) / (timestamp - latestTimestamp);
      newPlotPoint = [timestamp, newValue];
      this.plot.push(newPlotPoint);
    } else {
      this.plot.push([null])
    }
    this.latestValue = value;
    this.latestTimestamp = timestamp;
  };

  DerivativePlot.prototype.getPlot = function () {
    return this.plot;
  }

  return {
    DerivativePlot: DerivativePlot,
    humanReadableByteSize: humanReadableByteSize,
    whenAll: whenAll,
    renderTemplate: renderTemplate,
    apiPOSTCall: apiPOSTCall,
    apiGETCall: apiGETCall,
    apiDELETECall: apiDELETECall,
    randomColor: randomColor,
    averageArray: averageArray
  }

}());
