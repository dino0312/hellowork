var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

app.listen(port, function () {
    console.log('meadowlark app listening on port ' + port );
  });
  