var express = require('express'),
	pg = require('pg'),
	app = express();

var env = require('./config/env.js'),
	environment = new env();

//load expressjs configs/headers/defaults.  for more info, check expressjs.com, pass in app and overall config
require('./config/express_config')(app);

//loading up my routes and passing the app instance to it
require("./app/routes")(app);

app.listen(environment.port);
console.log('listening on port ' + environment.port)



/* from right to left:  assigning the app function to module.exports, 
   which in turn is implicitely assigning it to the exports variable.  
   Now exports = app everywhere.
   More Info:  http://bites.goodeggs.com/posts/export-this/#namespace
*/
exports = module.exports = app;