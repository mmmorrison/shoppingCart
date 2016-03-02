app.service('MyService', ['$http', '$q', function($http, $q) {
  var deferred = $q.defer();
  var qty = 0;
  var invoice = [];

  $http.get("resources/stock.json").then(function(data) {
    deferred.resolve(data)
  });

  this.gotData = function() {
    return deferred.promise
  };


  this.bag =  {
    invoice: {
      items: [
        {
          _id: 0,
          qty: 0,
          cost: 0

        }
      ]
    }
  }
  this.addItem = function(item) {
    this.bag.invoice.items.push({ _id: 0, qty: 0, cost: 0})
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
