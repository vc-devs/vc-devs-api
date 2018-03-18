const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

const email = require('./routes/emailRoute');

const prova      = require('./routes/provasRoute');
const provaModel = require('./model/provas');

const gabarito      = require('./routes/gabaritosRoute');
const gabaritoModel = require('./model/gabaritos');

const examLocation      = require('./routes/examLocationRoute');
const examLocationModel = require('./model/examLocation');

const image      = require('./routes/imagesRoute');
const imageModel = require('./model/imagens');

const edital      = require('./routes/editaisRoute');
const editalModel = require('./model/editais');

const cors = require('cors')
const app  = express();

//CORS V02
app.use(cors())

mongoose.connect('mongodb://vc_database:vc_database@ds243768.mlab.com:43768/heroku_dnhx3mcv');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', email);
app.use('/', prova);
app.use('/', gabarito);
app.use('/', image);
app.use('/', edital);
app.use('/', examLocation);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
