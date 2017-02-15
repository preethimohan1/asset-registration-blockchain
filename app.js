/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

var express = require('express'),
http = require('http');

// cfenv provides access to your Cloud Foundry environment
var cfenv = require('cfenv');

// create a new express server
var app = express();
app.engine('html', require('ejs').renderFile);
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

//Handle the form parameters
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Create new asset
app.post('/newAsset', function(request, response) {
	console.log('Creating new asset : ' + JSON.stringify(request.body));
	response.redirect('message.html');
});

//get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
