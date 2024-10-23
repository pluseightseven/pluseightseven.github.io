document.body.setAttribute("width", screen.availWidth);
document.body.setAttribute("height", screen.availHeight);
document.body.style.backgroundColor = "#290000";
document.body.style.color = "#002600";
document.body.style.accentColor = "#29260050";
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

const docti = document.querySelector('title');
docti.textContent = '+87 : Plus Eight Seven';

const docma = document.createElement("main");
docma.setAttribute("width", screen.availWidth);
docma.setAttribute("height", screen.availHeight);
docma.style.display = "flex";
docma.style.alignItems = "center";
docma.style.justifyContent = "center";
docma.style.margin = 0;
docma.style.padding = 0;
docma.style.backgroundColor = "#000";
docma.style.color = "#290260";
// docma.style.fontSize = "300%";
document.body.appendChild(docma);

const maidi = document.createElement("div");
maidi.setAttribute("max-width", "600px");

docma.appendChild(maidi);

const maidih1 = document.createElement("h1");
maidih1.textContent = "+87";
maidi.appendChild(maidih1);