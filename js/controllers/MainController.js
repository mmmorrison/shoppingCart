app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  // $scope.categoryArray = [{categories: "dark", "cold", "dry", "hot", "awesome", "summer", "warm", "winter", "lucid", "spring"];
  $scope.categoryArray = [{name: "dark"}];
  $scope.selected = $scope.categoryArray[0];
  var promise = MyService.gotData();

  promise.then(function(data) {
    $scope.teas = data.data;
    for (var i = 0; i < $scope.teas.length; i++) {
    }
  });

}])
