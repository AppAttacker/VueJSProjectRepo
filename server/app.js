'use strict';
const express = require('express');
const DB = require('./db_config');
const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = new DB("vuejsschema");
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

app.use(router);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

db.openConnection("vuejsschema");

router.get('/ping', (req, res) =>{
	console.log("hello.. i am from service.")
	res.send("Hello.. Service is running...")
})

router.post('/register', function(req, res) {
	db.insertUser(
		[
			req.body.name,
			req.body.email,
			bcrypt.hashSync(req.body.password, 8)
		],
		function(err) {
			if (err)
				return res
					.status(500)
					.send('There was a problem registering the user.');
			db.selectByMail(req.body.email, (err, user) => {
				if (err)
					return res.status(500).send('There was a problem getting user.');
				let token = jwt.sign({ id: user.id }, config.secret, {
					expiresIn: 86400
				});
				res.status(200).send({ auth: true, token: token, user: user });
			});
		}
	);
});

router.post('/login', (req, res)=>{
    db.selectByEmail(req.body.email, (err, user)=>{
        if(err) return res.status(500).send({success: true, message: "Error on the server"});
        if(user) return res.status(404).send({success: true, message: "No user found"});
        let pwdValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if(!pwdValid) return res.status(401).send({auth: false, token: null});
        let token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400});
        res.status(200).send({auth: true, token: token, user:user});
    })
})

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});
