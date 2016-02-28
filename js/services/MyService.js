app.service('MyService', ['$http', '$q', function($http, $q) {
  var deferred = $q.defer();



  $http.get("resources/stock.json").then(function(data) {
    deferred.resolve(data)
  });

  this.gotData = function() {
    return deferred.promise
  };
  // 
  // this.resolvePromise = function() {
  //   var promise = this.gotData()
  //   promise.then(function(data) {
  //     var data = data.data;
  //   })
  //   }






}]);
