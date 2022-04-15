// Selecting elements 
$("h1");//instead of document.querySelector("h1");

$("button");//instead of document.querySelectorAll("button");


//Manipulating styles with jQuery
$("h1").css("color", "red");

$("h1").addClass("big-title");//using class instead of css

$("h1").remove("big-title");//removing class


//Manipulating text 
$("h1").text("GoodBye"); 
// $("button").text("Don't CLick Me");//It changes all elements

$("button").html("<em>instead of innerHtml</em>");


//Manipulating attributes
$("a").attr("href","https://youtube.com");


//Adding EventListeners 

// $("h1").click(function ()) {
// 	$("h1").css("color","pruple");
// });

// for(var i=0;i<5;i++){
// 	document.querySelectorAll("button")[i].addEventListener("click",function(){
// 		document.querySelector("h1").style.color="purple";
// 	});
// }

//Simple way by using jQuery
$("button").click(function (){
	$("h1").css("color","purple")	
});


//Challenge
$(document).keypress(function(e){
	$("h1").text(e.key);
});

