var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));


var fortunes=["Conquer your fear or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",];

app.get('/', function (req, res) {
  // res.send('Dinosaur Home!!');
  res.render('home');
});

app.get('/about', function (req, res) {
  // res.send('Dinosaur Home!!');
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {fortune:randomFortune});
});

app.get('/doc', (req, res) => {
    // res.render('https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit');
    res.send('<a href= https://docs.google.com/document/d/1XJiLK9OA_dZMb9gdX7zP0kXrSpBuc_PBNsG6ct1eZiM/edit>Main entery</a>');
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

app.listen(443, function () {
  console.log('Example app listening on port 443!');
});
