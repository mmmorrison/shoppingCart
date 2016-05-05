var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/cart', {
      templateUrl: 'shoppingCart/partials/cart.html',
      controller: 'CartController'
    })
    .when('/', {
      templateUrl: 'shoppingCart/partials/tea.html',
      controller: 'MainController'
    })
});
