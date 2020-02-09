let body = document.getElementsByTagName("body")[0];
let leftColor = document.querySelector("#leftColor");
let rightColor = document.querySelector("#rightColor");
let curBg = document.querySelector("#curBg");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + leftColor.value + "," + rightColor.value + ")";
	curBg.textContent = body.style.background + ";";
}


leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);