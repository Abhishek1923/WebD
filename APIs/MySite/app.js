const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app=express();

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
	const firstName=req.body.fName;
	const lastName = req.body.lName;
	const email=req.body.email;

	const data = {
		members: [{
			email_address: email,
			status: "subscribed",
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName
			}
		}]
	};

	const jsonData=JSON.stringify(data);

	const url = "https://us12.api.mailchimp.com/3.0/lists/9f6260e10c";
	const options={
		method:"POST",
		auth:"Abhishek1:6115d9eb13019d22e26d8f508c91e52c-us12"
	}

	const request=https.request(url,options,function(response){
		if(response.statusCode===200){
			res.sendFile(__dirname+"/success.html");
		}else{
			res.sendFile(__dirname+ "/failure.html");
		}
		response.on("data",function(data){
			console.log(JSON.parse(data));
		});
	});

	request.write(jsonData);
	request.end();
});

app.post("/failure",function(req,res){
	res.redirect("/");
});

app.listen(3000,function (){
	console.log("Server is running at 3000.");
})

// 6115d9eb13019d22e26d8f508c91e52c-us12
// 9f6260e10c