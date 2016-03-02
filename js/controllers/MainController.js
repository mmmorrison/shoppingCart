app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  var promise = MyService.gotData();
  //LIST OF CATEGORIES
  $scope.x = [];
  $scope.SortPrice = [];
  $scope.cart = {};

  promise.then(function(data) {
    $scope.teas = data.data;
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].categories.forEach(function(element) {
        $scope.x.push(element);
    })
  }

  $scope.x = _.uniq($scope.x, function(element) {
      return element
    })
    $scope.selected = $scope.x[0];
  });

  $scope.addItem = function(tea) {
    console.log(tea);
  }


    // $scope.qty = getQty();
    $scope.bagCount = function(bag){
      return bag.invoice.length
    };


}]);
