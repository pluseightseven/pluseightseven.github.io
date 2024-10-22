//document.documentElement.style.backgroundColor = "#000";
const peshtml = document.querySelector("html");
peshtml.style.backgroundColor = "#000";

document.body.style.backgroundColor = "#000";
document.body.style.color = "#fff";
document.body.style.width = window.screen.availWidth;
document.body.style.height = window.screen.availHeight;
document.body.alignSelf ="center";
document.body.justifySelf = "center";
document.body.alignContent ="center";
document.body.justifyContent = "center";
document.body.alignItems ="center";
document.body.justifyItems = "center";
document.body.appendChild(pes);

const pestitle = document.querySelector("title");
pestitle.textContent = "+87";
pestitle.style.fontFamily = 'ANTON';

const pes = document.createElement("h1");
pes.setAttribute("id", "pes");
pes.addEventListener("mouseover", function(){
    pes.style.cursor = "pointer";
});
pes.addEventListener("click", function(){
    window.location.href = "/";
});
//pes.style.position = "absolute";
pes.textContent = "+87";
pes.fontSize = "875%";
pes.style.alignSelf = "center";
//pes.style.justifySelf = "center";
//pes.style.positionX = "50%";
//pes.style.positionY = "50%";