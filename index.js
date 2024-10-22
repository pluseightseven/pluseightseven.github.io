//document.documentElement.style.backgroundColor = "#000";
//const peshtml = document.querySelector("html");
//peshtml.style.backgroundColor = "#000";
const pesbody = document.body;
const bodystyle = pesbody.style;
bodystyle.backgroundColor = "#000";
bodystyle.color = "#fff";
bodystyle.width = window.screen.availWidth;
bodystyle.height = window.screen.availHeight;
bodystyle.alignSelf ="center";
bodystyle.justifySelf = "center";
bodystyle.alignContent ="center";
bodystyle.justifyContent = "center";
bodystyle.alignItems ="center";
bodystyle.justifyItems = "center";
pesbody.appendChild(pes);

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