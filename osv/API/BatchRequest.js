var Settings = require("../Settings");

function BatchRequests (basePath, batchAPIPath) {
  this.basePath = basePath;
  this.url = basePath + batchAPIPath;
  this.queue = [];
  this.promises = [];
  this.interval = setInterval(this.commitRequestsQueue.bind(this), 2000)
};

<<<<<<< HEAD
BatchRequests.prototype.addRequest = function (request) {
  var promise = $.Deferred();
  this.queue.push(request);
  this.promises.push(promise);
  return promise;
}

BatchRequests.prototype.getFormatedQueue = function () {
  return this.queue.map(function (request) {
    return {"method": request.method, "relative_url": request.path}
  });
};
=======
  function BatchRequests (basePath, batchAPIPath) {
    this.url = basePath + batchAPIPath;
    this.interval = setInterval(this.commitRequestsQueue.bind(this), 2000)
  };

  BatchRequests.prototype.queue = [];

  BatchRequests.prototype.promises = [];

  BatchRequests.prototype.clearInterval = function () {
    clearInterval(this.interval);
  };

  BatchRequests.prototype.addRequest = function (request) {
    var promise = $.Deferred();
    this.queue.push(request);
    this.promises.push(promise);
    return promise;
  };
>>>>>>> Claned up batch requests class

BatchRequests.prototype.resetQueue = function () {
  this.queue = [];  
  this.promises = [];
};

BatchRequests.prototype.resolve = function (promises, responses) {
  responses = JSON.parse(responses.replace(/<h1>We didn't find the page you were looking for<\/h1>/g, 404));
  responses.forEach(function (response, idx) {
    if (response.code == 200) {
      promises[idx].resolve(response.body);
    } else {
      promises[idx].reject(response.code)        
    }
  });
};

<<<<<<< HEAD
BatchRequests.prototype.reject = function (promises, error) {
  promises.forEach(function (promise) {
    promise.reject(err)
  });
};

BatchRequests.prototype.getFormData = function () {
  var formData = new FormData(),
    requests = JSON.stringify(this.queue.map(function (request) {
      return {"method":"GET", "relative_url":request.path}
    }));
  formData.append("batch", requests);
  return formData;
};

BatchRequests.prototype.commitRequestsQueue = function () {
  var self = this,
      queue = this.queue,
      promises = this.promises,
      formData = this.getFormData();
    
  if (queue.length == 0) return;
  this.resetQueue();

  $.ajax({
    url: this.url,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
  })
  .then(function (responses) {
    self.resolve(promises, responses);
  })
  .fail(function (error) {
    self.reject(promises, error)  
  });
};

BatchRequests.prototype.get = function (path) {
  return this.addRequest({
    methd: "GET",
    path: path
  });
};

var singleton = new BatchRequests(Settings.BasePath, "/api/batch")

module.exports = singleton;
=======
  BatchRequests.prototype.parseResponses = function (responses) {
    return JSON.parse(responses.replace(/<h1>We didn't find the page you were looking for<\/h1>/g, 404))
  };

  BatchRequests.prototype.resolve = function (promises, responses) {
    this.parseResponses(responses).forEach(function (response, idx) {
      if (response.code == 200) {
        promises[idx].resolve(response.body);
      } else {
        promises[idx].reject(response.code)        
      }
    });
  };

  BatchRequests.prototype.reject = function (promises, error) {
    promises.forEach(function (promise) {
      promise.reject(error)
    });
  };

  BatchRequests.prototype.getRequests = function () {
    return JSON.stringify(this.queue.map(function (request) {
        return {"method":"GET", "relative_url":request.path}
    }))
  };

  BatchRequests.prototype.getFormData = function () {
    var formData = new FormData(),
        requests = this.getRequests();

    formData.append("batch", requests);
    return formData;
  };

  BatchRequests.prototype.postData = function (formData) {
    return $.ajax({
      url: this.url,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST',
    });
  };

  BatchRequests.prototype.commitRequestsQueue = function () {
    var self = this,
        queue = this.queue,
        promises = this.promises,
        formData = this.getFormData();
      
    if (queue.length == 0) return;
    this.resetQueue();
    this.postData(formData)
    .then(function (responses) {
      self.resolve(promises, responses);
    })
    .fail(function (error) {
      self.reject(promises, error)  
    });
  };

  BatchRequests.prototype.get = function (path) {
    return this.addRequest({
      method: "GET",
      path: path
    });
  };

  var singleton = new BatchRequests(OSv.Settings.BasePath, "/api/batch");
  
  return {
    get: singleton.get.bind(singleton)
  }
>>>>>>> Claned up batch requests class

