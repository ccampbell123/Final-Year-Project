var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var serialport = require('serialport');

var index = require('./routes/index');
var users = require('./routes/users');

var portName = 'COM12';

var myPort = new serialport(portName, {
  baudRate: 9600,
  parser: new serialport.parsers.Readline('\n')
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen(){
    console.log('Open connections!');
}

function onData(data){
    console.log('on Data ' + data);
}

var dataIn = "Test Data On";

function myFunction() {
  document.getElementById("test1").innerHTML = "Hello World, " + dataIn;
}

app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
  res.send('POST Request');
});

app.put('/update-data', function (req, res) {
  res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
  res.send('DELETE Request');
});

module.exports = app;
