const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

const prova        = require('./app/routes/provasRoute');
const gabarito     = require('./app/routes/gabaritosRoute');
const examLocation = require('./app/routes/examLocationRoute');
const image        = require('./app/routes/imagesRoute');
const edital       = require('./app/routes/editaisRoute');
const email        = require('./app/routes/emailRoute');
const aproveds     = require('./app/routes/aprovedsRoute');

const cors = require('cors');
const app  = express();

//CORS V02
app.use(cors());

mongoose.connect('mongodb://vc_database_whrite:vc_database_whrite@ds243768.mlab.com:43768/heroku_dnhx3mcv');

// view engine setup
app.set('view engine', 'jade');
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
app.use('/', aproveds);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
