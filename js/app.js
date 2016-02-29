var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/meantea/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'CartController'
    })
    .when('/meantea', {
      templateUrl: 'index.html',
      controller: 'MainController'
    })
    .otherwise('/')
});
// angular.module('phonecatApp', ['ngRoute','phonecatControllers','phonecatFilters']);
