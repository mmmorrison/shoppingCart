app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  var promise = MyService.gotData();

  promise.then(function(data) {
    $scope.teas = data.data
  })
}])
