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
tabtitlep87.textContent = '+87 : Plus Eight Seven';

const plus87 = document.createElement("main");
plus87.textContent = "+87";
plus87.setAttribute("width", screen.availWidth);
plus87.setAttribute("height", screen.availHeight);
plus87.style.display = "flex";
plus87.style.alignItems = "center";
plus87.style.justifyContent = "center";
plus87.style.margin = 0;
plus87.style.padding = 0;
plus87.style.backgroundColor = "#000";
plus87.style.color = "#290260";
plus87.style.fontSize = "300%";
document.body.appendChild(plus87);

const sectionp87 = document.createElement("section");
sectionp87.setAttribute("max-width", "600px");

plus87.appendChild(sectionp87);
