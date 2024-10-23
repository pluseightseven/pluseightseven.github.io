document.body.setAttribute("width", screen.availWidth);
document.body.setAttribute("height", screen.availHeight);
document.body.style.backgroundColor = "#290000";
document.body.style.color = "#002600";
document.body.style.accentColor = "#29260050";
document.body.style.margin = 0;
document.body.style.padding = 0;

const docti = document.querySelector('title');
docti.textContent = '+87 : Plus Eight Seven';

const pesheader = document.createElement("header");
pesheader.setAttribute("width", "100%");
pesheader.setAttribute("height", "100%");
document.body.appendChild(pesheader);


const docma = document.createElement("main");
docma.setAttribute("width", screen.availWidth);
docma.setAttribute("height", screen.availHeight);
docma.style.margin = 0;
docma.style.padding = 0;
docma.style.backgroundColor = "#000";
docma.style.color = "#290260";
docma.style.fontSize = "300%";
document.body.appendChild(docma);

const pesfooter = document.createElement("footer");
pesfooter.setAttribute("width", "100%");
pesfooter.setAttribute("height", "100%");
document.body.appendChild(pesfooter);

const maidi = document.createElement("div");
maidi.setAttribute("max-width", "600px");

// maidi.style.backgroundColor =  "#290260";
// maidi.style.color = "#00aaee";
docma.appendChild(maidi);

const maidih1 = document.createElement("h1");
maidih1.textContent = "+87";
maidi.appendChild(maidih1);