'use strict';
var mysql = require('mysql');
var conn = null;

class DB {
    
	DB(dbName) {
		conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
            password: 'admin',
            database: dbName
		});

		conn.connect(function(err) {
			if (err) throw err;
			console.log('Database connected successfully');
		});
		createTable();
    }
    openConnection(dbName){
        conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
            password: 'admin',
            database: dbName
		});

		conn.connect(function(err) {
			if (err) throw err;
			console.log('Database connected successfully');
		});
		this.createTable();
    }
	createTable() {
		conn.query(
			'CREATE TABLE IF NOT EXISTS user (id integer PRIMARY KEY, name VARCHAR(150), email VARCHAR(150) UNIQUE, user_pass VARCHAR(150), is_admin integer)',
			function(err, results, fields) {
				if (err) console.log('Unable to create table ' + err);
				console.log('DB table created success');
			}
		);
    }
    selectByEmail(email, callback){
        return conn.query('SELECT * from user where email=?'
        ,[email],(err, row)=>{
            callback(err, row)
        });
    }

    insertUser(user, callback){
        return conn.query('INSERT INTO user (name,email,user_pass) VALUES (?,?,?)',
        user, (err, row)=>{
            callback(err, row)
        });
    }

    insertAdminUser(user, callback){
        return conn.query('INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)',
        user, (err, row)=>{
            callback(err, row)
        });
    }

    selectAll(callback){
        return conn.all(`SELECT * FROM user`, (err,rows)=>{
            callback(err,rows)
        })
    }
    
}
module.exports = DB
  
