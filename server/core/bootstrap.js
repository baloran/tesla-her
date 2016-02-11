/**
 * Boilerplate Express App
 * Bootstrap
 * Arnaud Allouis aka Baloran
 */

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var moment = require('moment');

var env = process.env.NODE_ENV || 'development';
var routes = require('./routes');

module.exports = function (app) {
  app.engine('hbs', hbs({
    layoutsDir: path.join(__dirname, '/../','client/views/layouts'),
    defaultLayout: 'layout',
    extname: '.hbs',
    partialsDir: path.join(__dirname, '/../','client/views/partials'),
    helpers: {
        formatDate: function (date) {
          return moment(date).fromNow();
        },
        toLowerCase: function (str) {
          return str.toLowerCase();
        },
        ifCond: function(v1, v2, options) {
          if(v1 === v2) {
            return options.fn(this);
          }
          return options.inverse(this);
        }
    }
  }));

  app.set('views', './server/client/views');
  app.set('view engine', 'hbs');
  app.use(express.static(__dirname + '/client/'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));

  app.use('/', routes.home());

  app.use(express.static(path.join(path.normalize(__dirname + '/..'), 'client')));

}