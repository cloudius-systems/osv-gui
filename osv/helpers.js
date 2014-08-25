window.helpers = (function() {

  var whenAll,
    renderTemplate,
    humanReadableByteSize,
    apiGETCall,
    apiPOSTCall,
    apiDELETECall;

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

  apiDELETECall = function(path) {
    return function() {
      return $.ajax({
        url: OSv.Settings.BasePath + path,
        type: 'DELETE'
      })
    }
  }
  return {
    humanReadableByteSize: humanReadableByteSize,
    whenAll: whenAll,
    renderTemplate: renderTemplate,
    apiPOSTCall: apiPOSTCall,
    apiGETCall: apiGETCall,
    apiDELETECall: apiDELETECall,
    randomColor: randomColor
  }

}());
