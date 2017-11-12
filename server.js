var express = require("express");
var app = express();

// get port number
var port = process.env.PORT || 9000;
 
app.use(express.static(__dirname));

// routes
app.get("/", function (req, res) {
	res.reder("index");
});

app.listen(port, function(){
	console.log("app running");
})