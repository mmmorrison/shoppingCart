var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/maintea/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'CartController'
    })
    .otherwise('/');
});
