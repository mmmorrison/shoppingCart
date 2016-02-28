app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  categoryArray = ["dark", "cold", "dry", "hot", "awesome", "summer", "warm", "winter", "lucid", "spring"].sort();
  var promise = MyService.gotData();

  promise.then(function(data) {
    $scope.teas = data.data;
    console.log($scope.teas);
  });


}])
