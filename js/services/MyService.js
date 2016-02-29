app.service('MyService', ['$http', '$q', function($http, $q) {
  var deferred = $q.defer();

  $http.get("resources/stock.json").then(function(data) {
    deferred.resolve(data)
  });

  this.gotData = function() {
    return deferred.promise
  };

  this.bag = function() {
    {invoice = {
      items: [{
          qty: 0,
          cost: 0}]
        };
  }()

  this.addItem = function() {
    invoice.items.push({
          qty: 0,
          cost: 0
      });
  };

  this.removeItem = function(item) {
      invoice.items.splice(index, 1);
  },

  this.total = function() {
    var total = 0;
    forEach(invoice.items, function(item) {
      total += item.qty * item.cost;
      })
      return total;
  }





}]);
