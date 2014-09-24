var OSv = OSv || {};
OSv.API = OSv.API || {};

OSv.API.BatchRequests = window.BatchRequests = (function() {

  function BatchRequests (basePath, batchAPIPath) {
    this.basePath = basePath;
    this.url = basePath + batchAPIPath;
    this.queue = [];
    this.promises = [];
    this.interval = setInterval(this.commitRequestsQueue.bind(this), 2000)
  };

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

  var singleton = new BatchRequests(OSv.Settings.BasePath, "/api/batch")
  
  return {
    get: singleton.get.bind(singleton)
  }

}());
