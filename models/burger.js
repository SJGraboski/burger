// dependencies
// orm
var orm = require('../config/orm');

var burger = {
	// code populates left side with uneaten burger info
	uneatenDis: function () {
		orm.getUneaten(function(data){
			res.json(data);
		})
	}

	// code populates right side with uneaten burger info
	eatenDis: function() {
		orm.getEaten(function(data){
			res.json(data);
		})
	}

	// code makes a burger, refreshes left side
	addNew: function(burger) {
		orm.addBurger(burger)
	}

	// code sets burger to eaten, refreshes both sides
	eatOne: function(burger) {
		orm.eatBurger(burger)
	}
}

module.exports = burger;