const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", function (req, res) {
	// res.sendFile("index.html");
	res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);
	var result=num1+num2;

	res.send("Result is: "+result);
	// res.send("Thanks for posting..");
});

app.post("/bmicalculator", function (req, res) {
	var num1 = Number(req.body.w);
	var num2 = Number(req.body.h);
	var result = num1 /( num2 * num2 );

	res.send("Your BMI is " + result);
});


app.listen(3000, function () {
	console.log("the server started on port 3000");
});
