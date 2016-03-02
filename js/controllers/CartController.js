app.controller('CartController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService){
  var promise = MyService.gotData();
  $scope.x = [];
  $scope.cart = {};

  promise.then(function(data) {
    $scope.item = data.data;
  });



}])
