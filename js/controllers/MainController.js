app.controller('MainController', ['$scope', '$routeParams', 'MyService', function($scope, $routeParams, MyService) {
  var promise = MyService.gotData();
  $scope.x = [];
  
  promise.then(function(data) {
    $scope.teas = data.data;
    for (var i = 0; i < data.data.length; i++) {
      data.data[i].categories.forEach(function(element) {
        $scope.x.push(element);

    })
}

    $scope.x = _.uniq($scope.x, function(element) {
      return element
    });
  $scope.selected = $scope.x[0];
  })



}])
