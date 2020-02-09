let body = document.getElementsByTagName("body")[0];
let leftColor = document.querySelector("#leftColor");
let rightColor = document.querySelector("#rightColor");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + leftColor.value + "," + rightColor.value + ")";
}


leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);
