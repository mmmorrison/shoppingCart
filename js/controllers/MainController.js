app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  $scope.categoryArray = ["dark", "cold", "dry", "hot", "awesome", "summer", "warm", "winter", "lucid", "spring"].sort();
  var promise = MyService.gotData();

  promise.then(function(data) {
    $scope.teas = data.data;
  });
  // 
  // function CartForm($scope) {
  //   $scope.invoice = {
  //       items: [{qty: 0, cost: 0}]
  //   };


}])
