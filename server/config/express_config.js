var express = require('express'),
	corser = require('corser'),
	bodyParser = require('body-parser');

module.exports = function (app, config) {
	
	app.use(bodyParser())
	
	//setting up static directory to serve up static site from the public dir off root.
	app.use('/', express.static(__dirname + '../../../client'));
	
	//enable cross domain access everywhere!
	app.use(corser.create());
	
}