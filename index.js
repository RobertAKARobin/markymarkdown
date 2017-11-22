'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');

if(process.env['NODE_ENV'] != 'production'){
	dotenv.config();
	process.env.PORT = 3000;
	process.env['NODE_ENV'] = 'development';
	console.log('Dev environment');
}

var httpServer = express();
var baseServer = http.createServer(httpServer);

baseServer
	.listen(process.env.PORT, function(){
		console.log(Date().toLocaleString())
	});

httpServer
	.use('/', express.static('./public'))
	.use(cookieParser())
	.use(bodyParser.json())
	.use('/', express.static('./views'))
	.get('/api', function(req, res){
		res.json({
			success: true
		});
	});
