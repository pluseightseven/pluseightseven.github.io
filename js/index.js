//document.documentElement.style.backgroundColor = "#000";
//const peshtml = document.querySelector("html");
//peshtml.style.backgroundColor = "#000";
export const baseURI = document.baseURI;

const pestitle = document.querySelector("title");
pestitle.textContent = "+87";
pestitle.style.fontFamily = 'poppins';

const pesbody = document.body;
const pesbodystyle = pesbody.style;
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



const pesmain = document.createElement('main');
const pesmainstyle = pesmain.style;
pesmainstyle.width = "100%";
pesmainstyle.height = "100%";
pesmainstyle.alignSelf = 'center';
pesmainstyle.justifySelf = "center";
pesmainstyle.alignContent = "center";
pesmainstyle.justifyContent = "center";
pesmainstyle.alignItems = "center";
pesmainstyle.justifyItems ="center";
pesbody.appendChild(pesmain);




const pes = document.createElement("h1");
const pestyle = pes.style;
pes.textContent = "+87";
pes.setAttribute("id", "pes");
pestyle.position = "absolute";
pestyle.fontFamily = 'Noto Sans';
pestyle.fontSize = "875%";
pestyle.color = '#002611';
pestyle.accentColor = '#00261126';
pestyle.alignSelf = "center";
pestyle.justifySelf = "center";
pes.addEventListener("mouseover", function(){
    pes.style.cursor = "pointer";
    pestyle.boxShadow = "inset 0 0 2.6em 0 #fff";
    pestyle.borderRadius = "0.26em 0.11em";
});
pes.addEventListener("mouseout", function(){
    pestyle.boxShadow = "none";
});
pes.addEventListener("click", function(){
    window.location.href = "/";
    
});
pesmain.appendChild(pes);

const userlogin = document.createElement('div');
const userloginstyle = userlogin.style;
userlogin.textContent = 'login';
userlogin.setAttribute('id', 'userlogin-div');
userloginstyle.position = "absolute";
userloginstyle.textTransform = 'capitalize';
userloginstyle.backgroundColor = "#000";
userloginstyle.color = "#fff";
userloginstyle.borderRadius = "2em";
userloginstyle.textAlign = 'center';
userlogin.addEventListener("click", function() {
    window.location.href = "/login";
});
userlogin.addEventListener("mouseover", function() {
    userloginstyle.color = "#000";
    userloginstyle.backgroundColor = "#fff";
    userloginstyle.borderRadius = "2em";
    userloginstyle.cursor = "pointer";
})
userlogin.addEventListener("mouseout", function() {
    userloginstyle.backgroundColor = "#000";
    userloginstyle.color = "#fff";
    userloginstyle.border = "solid 8px #fff";
    userloginstyle.borderRadius = "2em";
})
userloginstyle.fontSize = '300%';
userloginstyle.width = "400px";
userloginstyle.marginBottom = "0.26%";
// userloginstyle.
pesmain.appendChild(userlogin);

const usersignup = document.createElement('div');
const usersignupstyle = usersignup.style;
usersignup.textContent = 'sign up';
usersignup.setAttribute('id', 'usersignup-div');
usersignupstyle.position = "absolute";
usersignupstyle.textTransform = 'capitalize';
usersignupstyle.backgroundColor = '#ffffff26';
usersignupstyle.color = '#000000';
usersignupstyle.textAlign = 'center';
usersignupstyle.fontSize = '300%';
usersignupstyle.width = '400px';
usersignupstyle.marginTop = '0.26%';
// usersignupstyle.
usersignup.addEventListener("click", function() {
    window.location.href = "/signup";
});
usersignup.addEventListener("mouseover", function() {
    usersignupstyle.cursor = "pointer";
})
pesmain.appendChild(usersignup);



class NoMadDiv extends HTMLDivElement {
    constructor() {
        console.log('div element');
    }
}

const div1 = new NoMadDiv();
div1.setAttributeNS("applydefaults", function() {
    div1.style.background = "transparent";
    div1.style.color = "#fff";
    div1.style.accentColor = "#ffffff26";
    div1.style.alignSelf = "center";
    div1.style.justifySelf = "center";
})

pesmain.appendChild(div1);