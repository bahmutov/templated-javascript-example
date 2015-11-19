var express = require('express');
var morgan = require('morgan');
var app = express();
var join = require('path').join;

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true;

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'public')));

app.get('/', function (req, res) {
  console.log('rendering index');
  res.render('index', {
    title : 'Home',
    analyticsId: '4xx-xxxxx'
  });
});

var port = 3000;
app.listen(port);
console.log('listening at port %d', port);
