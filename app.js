let body = document.getElementsByTagName("body")[0];
let leftColor = document.querySelector("#leftColor");
let rightColor = document.querySelector("#rightColor");
let curBg = document.querySelector("#curBg");

window.onload = () => {
	leftColor.value = "#ff0000"; //red
	rightColor.value = "#ffff00"; //yellow
	body.style.background = "linear-gradient(to right, " + leftColor.value + "," + rightColor.value + ")";
	curBg.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + leftColor.value + "," + rightColor.value + ")";
	curBg.textContent = body.style.background + ";";
}

leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);