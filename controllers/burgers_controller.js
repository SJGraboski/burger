// node modules
var express = require('express');

// burger.js
var burger = require('../models/burger.js');

// Routes
module.exports = function(app) {
	// API ROUTES
	// ===========
	// uneaten burgers
	app.get("/api/uneaten", function(req, res) {
		burger.uneatenDis(function(data) {
			res.json(data);
		});
	})

	// eaten burger
	app.get("/api/eaten", function(req, res) {
		burger.eatenDis(function(data) {
			res.json(data);
		});
	})

	// add a burger
	app.put("/api/add", function(req, res) {
		var newBurger = req.body;
		burger.addNew(newBurger);
		res.redirect('/');
	})

	// eat a burger
	app.put("/api/eat", function(req, res) {
		var eatBurger = req.body;
		burger.eatOne(eatBurger);
		res.redirect('/');
	})
	// HTML ROUTES
	// ===========
	app.get('/', function(req, res) {
		res.render("../views/index.html");
	})
}

