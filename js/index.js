//document.documentElement.style.backgroundColor = "#000";
//const peshtml = document.querySelector("html");
//peshtml.style.backgroundColor = "#000";
export const baseURI = document.baseURI;

const pestitle = document.querySelector("title");
pestitle.textContent = "+87";
pestitle.style.fontFamily = 'cursive';

const pesbody = document.body;
const pesbodystyle = pesbody.style;
pesbodystyle.backgroundColor = "#000429";
pesbodystyle.color = "#fff";
// pesbodystyle.width = window.screen.availWidth;
// pesbodystyle.height = window.screen.availHeight;
// pesbodystyle.alignSelf ="center";
// pesbodystyle.justifySelf = "center";
// pesbodystyle.alignContent ="center";
// pesbodystyle.justifyContent = "center";
// pesbodystyle.alignItems ="center";
// pesbodystyle.justifyItems = "center";
// pesbodystyle.overflow = 'hidden';


const pesmain = document.createElement('main');
const pesmainstyle = pesmain.style;
pesmainstyle.position = "relative";
// pesmainstyle.width = "100%";
// pesmainstyle.height = "100%";
// pesmainstyle.backgroundColor = '#00ff00';
// pesmainstyle.alignSelf = 'center';
// pesmainstyle.justifySelf = "center";
// pesmainstyle.alignContent = "center";
// pesmainstyle.justifyContent = "center";
// pesmainstyle.alignItems = "center";
// pesmainstyle.justifyItems ="center";
pesmainstyle.backgroundColor = "#0000ff";
// pesmainstyle.padding = "2em";
pesbody.appendChild(pesmain);




const pes = document.createElement("h1");
const pestyle = pes.style;
pes.textContent = "+87";
pes.setAttribute("id", "pes");
pestyle.position = "absolute";
pestyle.top = (window.screen.availHeight/2).toString();
pestyle.left = (window.screen.availWidth/2).toString();
pestyle.fontFamily = 'Noto Sans';
pestyle.fontSize = "875%";
pestyle.color = '#fff';
pestyle.accentColor = '#00261126';
pestyle.alignSelf = "center";
pestyle.justifySelf = "center";
pes.addEventListener("mouseover", function(){
    pes.style.cursor = "pointer";
    pestyle.boxShadow = "inset 0 0 2.6em 0 #fff";
    pestyle.borderRadius = "0.26em 0.11em";
    pestyle.color = pesbodystyle.backgroundColor;
});
pes.addEventListener("mouseout", function(){
    pestyle.boxShadow = "none";
    pestyle.color = "#fff";
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
userloginstyle.border = "solid 8% #fff";
userloginstyle.borderRadius = "2em";
// userloginstyle.textAlign = 'center';
userloginstyle.fontSize = '300%';
userloginstyle.width = "400px";
userloginstyle.marginBottom = "0.26%";
// userloginstyle.
userlogin.addEventListener("click", function() {
    window.location.href = "/login";
});
userlogin.addEventListener("mouseover", function() {
    userloginstyle.color = "#000";
    userloginstyle.backgroundColor = "#fff";
    userloginstyle.border = "solid 8% #000";
    userloginstyle.borderRadius = "2em";
    userloginstyle.cursor = "pointer";
})
userlogin.addEventListener("mouseout", function() {
    userloginstyle.backgroundColor = "#000";
    userloginstyle.color = "#fff";
    userloginstyle.border = "solid 8% #fff";
    userloginstyle.borderRadius = "2em";
})
pesmain.appendChild(userlogin);

const usersignup = document.createElement("div")
const usersignupstyle = usersignup.style;
usersignup.textContent = 'sign up';
usersignup.setAttribute('id', 'usersignup-div');
usersignupstyle.position = "absolute";
usersignupstyle.textTransform = 'capitalize';
usersignupstyle.backgroundColor = '#000';
usersignupstyle.color = '#fff';
usersignupstyle.textAlign = 'center';
usersignupstyle.fontSize = '300%';
usersignupstyle.width = '400px';
usersignupstyle.marginTop = '0.26%';
usersignupstyle.border = "solid 8% transparent"
usersignupstyle.borderRadius = "2em";
// usersignupstyle.
usersignup.addEventListener("click", function() {
    window.location.href = "/signup";
});
usersignup.addEventListener("mouseover", function() {
    usersignupstyle.cursor = "pointer";
    usersignupstyle.border = "solid 8% #fff"
})
usersignup.addEventListener("mouseout", function() {
    usersignupstyle.cursor = "pointer";
    usersignupstyle.border = "solid 8% transparent"
})
pesmain.appendChild(usersignup);