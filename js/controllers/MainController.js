app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  var promise = MyService.gotData();
  $scope.x = [];
  $scope.SortPrice = [];
  $scope.cart = {invoice:[]};
  $scope.bag = {invoice:{items:[]}};
  // $scope.qty = qty;
  console.log($scope);
  $scope.test = "Is this working"


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

  // $scope.getQty = function (x) {
  //   console.log(this);
  // }
  //


  $scope.addItem = function(tea) {
    // $scope.getQty();
    $scope.bag.invoice.items.push(tea._id, tea.price)
  }







    // $scope.bagCount = function(bag){
    //   return bag.invoice.length
    // };


}]);
