var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1;
console.log(loveScore);

if(loveScore===100){
	console.log("Your love score is: " + loveScore + "% & you love each other.");
}else if(loveScore>30 && loveScore<100){
	console.log("Your love score is: " + loveScore + "%, you are on the right track.");
}else{
	console.log("Your love score is: " + loveScore + " %");
	// return ("Your love score is: " + loveScore + " %");
}

// alert("Your love score is: "+loveScore+"%");