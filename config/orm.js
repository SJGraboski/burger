// require connection file
var connection = require('./connection.js');

// Values: (id, burger_name, devoured, date)

var orm = {
	// get all non-devoured burgers
	getUneaten : function(callback) {
		s = "SELECT * FROM burgers WHERE devoured = FALSE";
		connection.query(s, function(err, result){
			if err throw err;
			callback(result);
		}) 
	}
	// get all devoured burgers
	getEaten : function(callback) {
		s = "SELECT * FROM burgers WHERE devoured = TRUE";
		connection.query(s, function(err, result){
			if err throw err;
			callback(result);
		}) 
	}
	// add a burger
	addBurger : function(burger) {
		s = "INSERT INTO burger " +
					"VALUES " +
						"(null, '" + burger + "', FALSE, null)";
		connection.query(s, function(err, result){
			if err throw err;
		})
	}

	// devour a burger
	eatBurger : function(burger) {
		s = "UPDATE burgers " + 
				"SET devoured=TRUE " +
				"WHERE burger_name=" + burger +";";
		connection.query(s, function(err, result){
			if err throw err;
		})
	}
}

// export the object relational mapper
module.exports = orm;