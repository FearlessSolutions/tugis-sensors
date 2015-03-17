'use strict';

var pg = require('pg');

var env = require('../../config/env.js'),
    environment = new env(),
    connstring = environment.connstring;
    
/*
object for tables
*/


exports.feed = function(req, res, next) {
    var interval;

    res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive"});
    interval = setInterval(function() {
        pg.connect(connstring, function(err, client, done) {
            var handleError = function(err) {
                if(!err) return false;
                done(client);
                next(err);
                return true;

            };

            var myQuery = 'SELECT DISTINCT ON (sensorID) sensorID,temp,humidity,light,sound FROM sensors ORDER BY sensorID, "date" DESC';
            // res.write("data: " + (new Date()) + "\n\n");
            client.query(myQuery, function(err, result) {
                if(result.rowCount == 0) {
                  res.write('');
                } 
                else {
                    var strOut = '';
                    for(var a in result.rows){
                        strOut = strOut + result.rows[a].sensorid + ',' + result.rows[a].temp + ',' + result.rows[a].humidity + ',' + result.rows[a].light + ',' + result.rows[a].sound + '\n'
                    }
                    res.write(strOut);
                    done();
                }
            });
        })
    }, 1000);
    req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);

}
