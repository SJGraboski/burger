// node modules
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override')

// burger.js
var burger = require('../models/burger.js');

// create app
var app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// include handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// set up bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// TODO: Routes
// 1. use get to get
// 2. use put to update
// 3. use post to add

// TODO: Handlebars

// specify port
var PORT = process.env.PORT || 3000;
// listen port
app.listen(PORT)

