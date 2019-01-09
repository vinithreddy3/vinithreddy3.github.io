var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var initial= document.querySelector("gradient").style.getPropertyValue("background");
// css.textContent=initial;
// console.log(initial);
function setGradient() {
	var finalmix = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	body.style.background = finalmix;
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);