const docel = document.documentElement;
docel.style.backgroundColor = "#000";
// docel.textContent = "welcome to +87";
docel.style.color = "#fff";

const docti = document.querySelector('title');
docti.textContent = '+87 : Plus Eight Seven';

const docma = document.createElement("main");
document.body.appendChild(docma)

const docdi = document.createElement("div");
docma.appendChild(docdi);

// tab title
const pestabtitle = document.querySelector('title');
pestabtitle.textContent = "+87 &middot; Plus Eight Seven";

// div elements
const divelems = document.querySelectorAll("div");
divelems.forEach(element => {
    element.style.backgroundColor = "#000";
})

//body
const pesbody = document.querySelector("body");
pesbody.style.backgroundColor = "#000";
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
    element.style.color = "4183c4";
    element.style.textDecoration = "none";
});

// a:hover
const ahoverlinks = document.querySelectorAll("a:hover");
ahoverlinks.forEach(element => {
    element.style.textDecoration = "underline";
});

screenstyle.textContent = `a {
                                color: #4183c4;
                                text-decoration: none;
                            }
                            a:hover {
                                text-decoration: underline;
                            }
                            h1 {
                                width: 800px;
                                position: relative;
                                left: -100px;
                                letter-spacing: -1px;
                                line-height: 60px;
                                font-size: 60px;
                                font-weight: 100;
                                margin: 0px 0 50px 0;
                                text-shadow: 0 1px 0 #fff;
                            }
                            p {
                                color: rgba(0, 0, 0, 0.5);
                                margin: 20px 0;
                                line-height: 1.6;
                            }
                            ul {
                                list-style: none;
                                margin: 25px 0;
                                padding: 0;
                            }

            li {
                display: table-cell;
                font-weight: bold;
                width: 1%;
            }

            .logo {
                display: inline-block;
                margin-top: 35px;
            }

            .logo-img-2x {
                display: none;
            }

            @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and ( min--moz-device-pixel-ratio: 2), only screen and ( -o-min-device-pixel-ratio: 2/1), only screen and ( min-device-pixel-ratio: 2), only screen and ( min-resolution: 192dpi), only screen and ( min-resolution: 2dppx) {
                .logo-img-1x {
                    display: none;
                }

                .logo-img-2x {
                    display: inline-block;
                }
            }

            #suggestions {
                margin-top: 35px;
                color: #ccc;
            }

            #suggestions a {
                color: #666666;
                font-weight: 200;
                font-size: 14px;
                margin: 0 10px;
            }
                `;
/*
        <div class="container">
            <h1>404</h1>
            <p>
                <strong>File not found</strong>
            </p>
            <p>The site configured at this address does not
        contain the requested file.
      </p>
            <p>
                If this is your site, make sure that the filename case matches the URL
        as well as any file permissions.<br>
                For root URLs (like <code>http://example.com/</code>
                ) you must provide an
        <code>index.html</code>
                file.
      
            </p>
            <p>
                <a href="https://help.github.com/pages/">Read the full documentation</a>
                for more information about using <strong>GitHub Pages</strong>
                .
      
            </p>
            <div id="suggestions">
                <a href="https://githubstatus.com">GitHub Status</a>
                &mdash;<a href="https://twitter.com/githubstatus">@githubstatus</a>
            </div>
        </div>
*/