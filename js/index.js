document.body.setAttribute("width", screen.availWidth);
document.body.setAttribute("height", screen.availHeight);
document.body.style.backgroundColor = "#290000";
document.body.style.color = "#002600";
document.body.style.accentColor = "#29260050";

const docti = document.querySelector('title');
docti.textContent = '+87 : Plus Eight Seven';

const docma = document.createElement("main");
docma.setAttribute("width", screen.availWidth);
docma.setAttribute("height", screen.availHeight);
docma.style.backgroundColor = "#000";
docma.style.color = "#290260";
docma.style.display = "flex";
docma.style.alignItems = "center";
docma.style.justifyContent = "center";
docma.style.flexDirection = "column";
docma.style.flexBasis = "auto";
document.body.appendChild(docma);

const maidi = document.createElement("div");
// maidi.style.backgroundColor =  "#290260";
// maidi.style.color = "#00aaee";
docma.appendChild(maidi);

const maidih1 = document.createElement("h1");
maidih1.textContent = "+87";
maidi.appendChild(maidih1);

// tab title
// const pestabtitle = document.querySelector('title');
// pestabtitle.textContent = "+87 : Plus Eight Seven";

// div elements
const divelems = document.querySelectorAll("div");
divelems.forEach(element => {
    // element.style.backgroundColor = "#000";
})

//body
const pesbody = document.querySelector("body");
// pesbody.style.backgroundColor = "#000";
pesbody.margin = 0;
pesbody.style.fontFamily = "Helvetica Neue, Helvetica, Arial, Sans-serif";

// style screen mdeia
const screenstyle = document.createElement("style")
screenstyle.setAttribute("type", "text/css");
screenstyle.setAttribute("media", "screen");
pesbody.appendChild(screenstyle);

// .container
const pescontainer = document.createElement('div')
pescontainer.setAttribute("calss", "container");
pescontainer.style.margin = "50px auto 40px auto";
pescontainer.style.width = "600px";
pescontainer.style.textAlign = "center";

// a
const alinks = document.querySelectorAll("a");
alinks.forEach(element => {
    element.style.color = "#4183c4";
    element.style.textDecoration = "none";
});

// a:hover
const ahoverlinks = document.querySelectorAll("a:hover");
ahoverlinks.forEach(element => {
    element.style.textDecoration = "underline";
});

// body{
//     background-color: #000;
//     color: #fff;
// }
// screenstyle.textContent = `
// a {
//     color: #4183c4;
//     text-decoration: none;
// }
// a:hover {
//     text-decoration: underline;
// }
// h1 {
//     width: 800px;
//     position: relative;
//     letter-spacing: -1px;
//     line-height: 60px;
//     font-size: 60px;
//     font-weight: 100;
//     margin: 0px 0 50px 0;
//     text-shadow: 0 1px 0 #fff;
// }
// p {
//     color: rgba(0, 0, 0, 0.5);
//     margin: 20px 0;
//     line-height: 1.6;
// }
// ul {
//     list-style: none;
//     margin: 25px 0;
//     padding: 0;
// }
// li {
//     display: table-cell;
//     font-weight: bold;
//     width: 1%;
// }
// .logo {
//     display: inline-block;
//     margin-top: 35px;
// }
// .logo-img-2x {
//     display: none;
// }
// @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and ( min--moz-device-pixel-ratio: 2), only screen and ( -o-min-device-pixel-ratio: 2/1), only screen and ( min-device-pixel-ratio: 2), only screen and ( min-resolution: 192dpi), only screen and ( min-resolution: 2dppx) {
//     .logo-img-1x {
//         display: none;
//     }
//     .logo-img-2x {
//         display: inline-block;
//     }
// }
// #suggestions {
//     margin-top: 35px;
//     color: #ccc;
// }
// #suggestions a {
//     color: #666666;
//     font-weight: 200;
//     font-size: 14px;
//     margin: 0 10px;
// }`;