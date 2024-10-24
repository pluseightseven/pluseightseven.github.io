// export function completebodystyles(){
//     document.body.setAttribute("width", screen.availWidth);
//     document.body.setAttribute("height", screen.availHeight);
//     document.body.style.backgroundColor = "#290000";
//     document.body.style.color = "#002600";
//     document.body.style.accentColor = "#29260050";
//     document.body.style.margin = 0;
//     document.body.style.padding = 0;
//     document.body.style.alignItems = "center";
//     document.body.style.justifyContent = "center";
// }
// completebodystyles();
const tabtitlep87 = document.querySelector('title');
tabtitlep87.textContent = '+87 # Plus Eight Seven';

export const stylescreen487 = document.createElement('style');
stylescreen487.setAttribute("type", "text/css");
stylescreen487.setAttribute("media", "screen");
stylescreen487.textContent = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    background: 
        linear-gradient(to top, #26110429, #290000, #26110429, #290000), 
        radial-gradient(circle, #26110429, #290000, #26110429, #290000) 
        norepeat center cover;
    box-shadow: inset 0 0 2.6em linear-gradient(#290000, #290260);
    color: #abcdef;
    width: 100vw;
    height: 100vh;
}
html, body, main, div {
    display: flex;
    align-items: center;
    justify-content: center;
}
a {
    color: #481a85;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;    
}
h1, h2, h3, h4, h5, h6 {
    font-size: 300%;
    font-family: Helvetica Neue, Helvetica Sans, Sans-serif;
    color: #002611;
    background: transparent;
    width: 100%;
    height: 100%;
}
p {
    width: 600px;
    margin: 1.1em auto;
    padding: 1.1em auto;
    color: #fff;
    border: solid 0.26em radial-gradient(circle, #fff, #290000);
    box-shadow: 0 0 2.6em radial-gradient(circle, #fff, #290000, #fff, #290000);
}
`;
document.body.appendChild(stylescreen487);
if(document.body.style.width !== screen.availWidth){
    document.body.style.width = screen.availWidth; 
}
const plus87 = document.createElement("div");
plus87.textContent = "+87";
plus87.setAttribute("width", "100%");
plus87.setAttribute("height", "100%");
// plus87.style.display = "flex";
// plus87.style.alignItems = "center";
// plus87.style.justifyContent = "center";
plus87.style.marginBottom = 0;
plus87.style.padding = "2.6em";
plus87.style.position = "absolute";
plus87.style.top = innerHeight/2;
plus87.style.left = innerWidth/2;
plus87.style.background = "transparent";
plus87.style.color = "#afaf00";
plus87.style.textShadow = "0 0 2.6em #afaf00";
plus87.style.boxShadow = "0.11em 0.11em 0.11em #afaf00";
plus87.style.transition = "box-shadow 0.5s ease";
plus87.style.fontSize = "600%";
plus87.style.borderRadius = "50%";
document.body.appendChild(plus87);

const loremipsumtext = document.createElement("p");
loremipsumtext.textContent = new String(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam eligendi sunt, asperiores accusamus voluptates blanditiis numquam voluptatem, id, odit magni! Perferendis voluptatibus quo quod fuga, magnam consequatur nam veritatis!`);
document.body.appendChild(loremipsumtext);

const popeye = document.createElement("input");
// popeye.setAttribute("width", "600px");
popeye.style.postion = 'absolute';
popeye.style.top = "100px";
popeye.style.right = "100px";

document.body.appendChild(popeye);
