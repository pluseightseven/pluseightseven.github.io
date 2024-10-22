//document.documentElement.style.backgroundColor = "#000";
//const peshtml = document.querySelector("html");
//peshtml.style.backgroundColor = "#000";
export const baseURI = document.baseURI;

const pestitle = document.querySelector("title");
pestitle.textContent = "+87";
pestitle.style.fontFamily = 'ANTON';

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
pestyle.fontFamily = 'Noto Sans';
pestyle.fontSize = "875%";
pestyle.color = '#002611';
pestyle.accentColor = '#00261126';
pestyle.alignSelf = "center";
pestyle.justifySelf = "center";
//pes.style.positionX = "50%";
//pes.style.positionY = "50%";

pesbody.appendChild(pes);

const userlogin = document.createElement('div');
userlogin.setAttribute('id', 'userlogin-div');
userlogin.textContent = 'login';
const userloginstyle = userlogin.style;
userloginstyle.textTransform = 'capitalize';
userloginstyle.backgroundColor = '#fff';
userloginstyle.color = '#000';
userloginstyle.textAlign = 'center';
userloginstyle.fontSize = '300%';
userloginstyle.width = "calc(window.screen.availWidth - 20%)";
// userloginstyle.
pesbody.appendChild(userlogin);

const usersignup = document.createElement('div');
usersignup.setAttribute('id', 'usersignup-div');
usersignup.textContent = 'sign up';
const usersignupstyle = usersignup.style;
usersignupstyle.textTransform = 'capitalize';
usersignupstyle.backgroundColor = '#fff';
usersignupstyle.color = '#000';
usersignupstyle.textAlign = 'center';
usersignupstyle.fontSize = '300%';
usersignupstyle.width = 'inherit';
// usersignupstyle.
pesbody.appendChild(usersignup);
