

var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));


var fortune = require('./lib/fortune.js');

var port = process.env.PORT || 3000;

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test == '1';
  console.log('res.locals.showTest = ' + res.locals.showTests );
  next();
});


app.get('/', function (req, res) {
  // res.send('Dinosaur Home!!');
  res.render('home');

});

app.get('/about', function (req, res) {
  // res.send('Dinosaur Home!!');
  res.render('about', {fortune:fortune.getFortune(), pageTestScript: '/qa/tests-about.js'});
});

app.get('/doc', (req, res) => {
    // res.render('https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit');
    res.send('<a href= https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit>Main entery</a>');
   });

app.get('/devlog', (req, res) => {
    // res.render('https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit');
    // res.send('<a href= https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit>Main entery</a>');
   res.render('devlog'); 
   });


app.use(function (req, res, next) {
  // res.send('Dinosaur Home!!');
  res.status(404);
  res.render('404');
});

app.use(function (err, req, res, next) {
  // res.send('Dinosaur Home!!');
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port );
});
