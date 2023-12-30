// login-in


// deleteCookie("isLogin")

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
    console.log(cname, cvalue, exdays);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

var isLogin = getCookie("isLogin");
var isAdmin = getCookie("isAdmin")

if (!isLogin) {
    setCookie("isLogin", "false", 1);
}
if (isLogin == 'false') {
    location.pathname="/index.html"
}
if (isLogin == 'true') {
    
    var login = document.querySelector("#sign-in");
    login.innerHTML = `
            <div class="header__sign-in-true">
                    <p>Nguyễn Dũng</p>
                    <i class="fa-solid fa-caret-down"></i>
                    <ul class="header__sign-in-true__down">
                        <li><a href="#">Settings</a></li>
                        <li><a href="../index.html" id="log-out">Logout</a></li>
                    </ul>
            </div>`
    const logout = document.querySelector("#log-out")
    logout.addEventListener("click", (e) => {
                setCookie("isLogin", "false", 1);
                var login = document.querySelector("#sign-in");
                login.innerHTML = `
                        <div class="header__sign-in-false" id="sign-in-false">
                            <a href="admin/dashboard.html">Sign in</a>
                        </div>`
                location.reload;
            })
}













