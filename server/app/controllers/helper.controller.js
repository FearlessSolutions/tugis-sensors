'use strict';

var env = require('../../config/env.js'),
    environment = new env(),
    connstring = environment.connstring;
    
var pg = require('pg');

/**
 * A module that defines the response format.
 * @module app_schema_controller
 */
var fs = require('fs');

exports.showAPIdocs = function(req, res) {
	var update = 'GISAPI Workshop API Docs</br>' + 
        		 '</br></br><b>Helpers</b></br>' +
        		 'GET /api</br>' +
        		 'GET /api/showStorageAvailable</br></br></br>' +
        		 '<b>Geo Services</b></br>' + 
        		 'GET /api/boundingBox </br>' + 
        		 'GET /api/overlap </br>' + 
        		 'GET /api/simplify </br>' + 
        		 'GET /api/buffer </br>' + 
        		 'GET /api/funFilter'
    res.send(update)
}
