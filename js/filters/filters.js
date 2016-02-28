// angular.module.filter('yesNo', function() {
//     return function(input) {
//         return input ? 'yes' : 'no';
//     }
// });
//
//
// angular.module('phonecatApp', ['ngRoute','phonecatControllers','phonecatFilters']);

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
