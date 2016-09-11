var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/votes')

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '.')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

mongoose.connect('mongodb://bahama-llama:llamallama@ds029426.mlab.com:29426/heroku_vjlvzhh6');

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

module.exports = app;
