var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/cart', {
      templateUrl: '../partials/cart.html',
      controller: 'CartController'
    })
    .when('/', {
      templateUrl: '../partials/tea.html',
      controller: 'CartController'
    })
});
