document.body.setAttribute("width", screen.availWidth);
document.body.setAttribute("height", screen.availHeight);
document.body.style.backgroundColor = "#290000";
document.body.style.color = "#002600";
document.body.style.accentColor = "#29260050";
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

const tabtitlep87 = document.querySelector('title');
tabtitlep87.textContent = '+87 # Plus Eight Seven';

const plus87 = document.createElement("div");
plus87.textContent = "+87";
plus87.setAttribute("width", screen.availWidth);
plus87.setAttribute("height", screen.availHeight);
// plus87.style.display = "flex";
// plus87.style.alignItems = "center";
// plus87.style.justifyContent = "center";
plus87.style.margin = 0;
plus87.style.padding = 0;
plus87.style.position = "absolute";
plus87.style.top = "50px";
plus87.style.left = "50px";
// plus87.style.backgroundColor = "#000";
plus87.style.color = "#afaf00";
plus87.style.textShadow = "0 0 2.6em #afaf0029";
plus87.style.boxShadow = "inset 0 0 2.6em 0 #f1f1f126";
plus87.style.fontSize = "600%";
plus87.style.borderRadius = "50%";
document.body.appendChild(plus87);

const popeye = document.createElement("input");
popeye.setAttribute("width", "600px");
popeye.style.postion = 'absolute';
popeye.style.top = "100px";
popeye.style.right = "100px";

document.body.appendChild(popeye);
