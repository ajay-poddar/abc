var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var multiparty = require('connect-multiparty');
var controller = require('./controllers/events.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/techfest');


//Routes
var viewPages = require('./routes/viewPages');
var apis = require('./routes/apis');

var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port',port);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.methodOverride());
app.use(cookieParser());
app.use(multiparty());
app.use(express.static(path.join(__dirname, 'public')));

//developers
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/document/:id?', controller.showEvent);
app.put('/document', controller.insertEvent);
app.del('/document/:id?', controller.deleteEvent);
app.post('/document/:id?', controller.updateEvent);

//Routes
app.use('/', viewPages);
app.use('/api',apis);

http.createServer(app).listen(app.get('port'),function(res,req){
    console.log("Server Listening on Port " + app.get('port'));
});

module.exports = app;