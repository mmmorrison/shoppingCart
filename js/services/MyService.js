app.service('MyService', ['$http', '$q', function($http, $q) {
  var deferred = $q.defer();

  $http.get("stock.json").then(function(data) {
    deferred.resolve(data)
  });

  this.gotData = function() {
    return deferred.promise
  }
}]);
