const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
	host: 'mysql-container',
	user: 'root',
	password: 'programador',
	database: 'programador'
})

connection.connect();

app.get('/products',  function(req, resp){
	connection.query('SELECT * FROM products', function (erros, results) {
		if (error) {
			throw error
		};
		res.send(results.map(item => ({name: item.name, price: item.price})));
	});
});

app.listem(9001, "0.0.0.0", function(){
	console.log('Listening on port 9001');
})