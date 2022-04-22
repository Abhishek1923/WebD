const express = require("express");
const app=express();

app.get("/",function (request,response){
	// console.log(request);
	// response.send("Hey!");
	response.send("<h1>We can add html code in it.</h1>");
});

app.get("/contact", function (request, response) {
	response.send("<h1>Contact me at abhishek230401@gmail.com.</h1>");
});

app.listen(3000,function (){
	console.log("the server started on port 3000");
});
