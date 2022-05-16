const express=require("express");
const https = require('https');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
	res.sendFile(__dirname+"/index.html")
});

app.post("/",function (req,res) {

	console.log(req.body.cityName);

	const query = req.body.cityName;
	const apiKey = "5edc14ada09d1cbde0f93502ec557769";

	const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+",&APPID="+apiKey;
	https.get(url, function (response){
		console.log(response.statusCode);

		response.on("data",function(data){
			const weatherData=JSON.parse(data)
			const temp=weatherData.main.temp;
			// console.log(temp);
			const weatherDesc=weatherData.weather[0].description;
			// console.log(weatherDesc);
			const icon = weatherData.weather[0].icon;
			const imageUrl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";

			res.write("<h1>The temperature in "+query+" is: "+temp+
				" & the weather description is " + weatherDesc +"</h1>");
			res.write("<img scr="+imageUrl+">");
			res.send();
		})
	})
})

app.listen(3000,function () {
	console.log("Server is running at 3000.");
})