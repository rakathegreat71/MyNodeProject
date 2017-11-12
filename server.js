var express = require("express");
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var nodemailer  = require('nodemailer');


var app = express();

// body parser will get the body data and converts in into a json object
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// get port number
var port = process.env.PORT || 9000;
 
app.use(express.static(__dirname));

// routes
app.get("/", function (req, res) {
	res.reder("index");
});

app.post('/send', function(req, res){
	// res.send("this is working" + req.body);
	console.log(req.body);
	res.send("your mail is sent Mr." + req.body.name);
})

app.listen(port, function(){
	console.log("app running");
})