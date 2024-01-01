var buttonLogin = document.querySelector(".button-signin");
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
var isAdmin = getCookie("isAdmin");

buttonLogin.addEventListener("click", (e) =>{
    setCookie("isLogin","true",1);
})

const eyeicon = document.querySelector("#eyeicon")
const password = document.querySelector("#password")
eyeicon.addEventListener("click",(e) => {
    if(password.type == "password"){
        password.type = "text"
    }else{
        password.type = "password"
    }
})