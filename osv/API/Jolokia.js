var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.Jolokia = (function() {

  var apiGETCall = helpers.apiGETCall,
    MBeans = {};

  MBeans.attributes = function(name) {
    return apiGETCall("/jolokia/read/"+name)().then(function (res) {
      return $.map(res.value, function (value, key) {
        return {value: value, key: key}
      })
    })
  };

  MBeans.tree = function() {

    return apiGETCall("/jolokia/list")().then(function (res) {
      
      var MBeansObjects = $.map(res.value, function (MBeansObject, MBeansObjectName) {
        
        var parsed = {
          name: MBeansObjectName,
          types: {}
        };

        $.map(MBeansObject, function (value, key) {
          var typeName = key.match(/type=(.*?)($|,)/)[1];
          var name = key.match(/name=(.*?)($|,)/);
          var rawName = MBeansObjectName + ":" + key;
          if (!parsed.types[typeName]) {
            var type = {}
            type.objects = [];
            type.attr = value.attr;

            parsed.types[typeName] = type;
          } 
          if (name) {
            var object = {
              name: name[1],
              attr: value.attr,
              rawName:rawName
            }
            parsed.types[typeName].objects.push(object);
          } else {
            parsed.types[typeName].rawName = rawName;
          }
        });

        parsed.types = $.map(parsed.types, function (value, name) {
          value.name = name;
          return value;
        });
        return parsed;
      });

      return MBeansObjects;
    });
  };


  return { 
    MBeans: MBeans
  };

}());
