app.filter('YesNo', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

app.filter('decimal', function() {
    return function (input) {
        return input / 100;
    };
});

app.filter('SortPrice', function() {
    return function (input) {
        return input / 100;
    };
});
