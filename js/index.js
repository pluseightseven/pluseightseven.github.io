//document.documentElement.style.backgroundColor = "#000";
//const peshtml = document.querySelector("html");
//peshtml.style.backgroundColor = "#000";
export const baseURI = document.baseURI;
const pesbody = document.body;
const pestitle = document.querySelector("title");
pestitle.textContent = "+87";
pestitle.style.fontFamily = 'ANTON';

const pesbody = document.body;
const pesbodystyle = pesbody.style;

const pes = document.createElement("h1");
const pestyle = pes.style;
pes.setAttribute("id", "pes");
pes.addEventListener("mouseover", function(){
    pes.style.cursor = "pointer";
});
pes.addEventListener("click", function(){
    window.location.href = "/";
});
//pes.style.position = "absolute";
pes.textContent = "+87";
pestyle.fontSize = "875%";
pestyle.alignSelf = "center";
pestyle.justifySelf = "center";
//pes.style.positionX = "50%";
//pes.style.positionY = "50%";

pesbodystyle.backgroundColor = "#000";
pesbodystyle.color = "#fff";
pesbodystyle.width = window.screen.availWidth;
pesbodystyle.height = window.screen.availHeight;
pesbodystyle.alignSelf ="center";
pesbodystyle.justifySelf = "center";
pesbodystyle.alignContent ="center";
pesbodystyle.justifyContent = "center";
pesbodystyle.alignItems ="center";
pesbodystyle.justifyItems = "center";
pesbody.appendChild(pes);