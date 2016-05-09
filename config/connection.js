// require mysql
var mysql = require('mysql');

// specify connection
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	database: 'burgers_db',
	user: 'root',
	password: '',
})

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// export connection to whatever requires this file
module.exports = connection;