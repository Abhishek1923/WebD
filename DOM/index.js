// alert("Press OK for the output.");

document.querySelector("h1").innerHTML="Good Bye";

document.querySelector("h1").style.color="Green";

// document.querySelector("ul").innerHTML = "Abhishek";
document.getElementsByTagName("li")[2].innerHTML="Abhishek"; 

// document.getElementsByTagName("li")[2].length; 

// document.getElementById("title");

document.querySelector("li a").style.color="brown";

document.querySelector("button").style.backgroundColor="yellow";

//textContent only takes texts while innerHTML can takes whole html code
document.querySelector("h1").innerHTML="<em>Good Bye</em>"

//setting attributes
document.querySelector("a").setAttribute("href","https://www.youtube.com");
