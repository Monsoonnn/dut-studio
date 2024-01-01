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
if (!isAdmin) {
    setCookie("isAdmin", "false", 1);
}

if (isLogin == 'true') {

    var login = document.querySelector("#sign-in");
    login.innerHTML = `
            <div class="header__sign-in-true">
                    <p>Nguyễn Dũng</p>
                    <i class="fa-solid fa-caret-down"></i>
                    <ul class="header__sign-in-true__down">
                        <li><a href="../users/account_setting.html">Settings</a></li>
                        <li><a href="../index.html" id="log-out">Logout</a></li>
                    </ul>
            </div>`
    const logout = document.querySelector("#log-out")
    logout.addEventListener("click", (e) => {
        setCookie("isLogin", "false", 1);
        var login = document.querySelector("#sign-in");
        location.reload;
    })
    var cmtBox = document.querySelector('#userCmtBox')
    cmtBox.innerHTML = `<div class="review__input">
    <div class="review__avt">
        <img src="../assets/images/dungct.jpg" alt="" srcset="">
    </div>      
    <form>
        <input type="text" name="cmt" id="newComment" placeholder="Write Comment">
    <form>
    </div>`
    var input = cmtBox.querySelector('form')
    input.addEventListener("submit", (e) =>{
        e.preventDefault()
        const newCmt = document.createElement("div")
        const inputCmt = e.target.cmt.value;
        newCmt.innerHTML=`
            <div class="review__cmtBox">
                    <div class="review__input">
                        <div class="review__avt">
                            <img src="../assets/images/dungct.jpg" alt="" srcset="">
                        </div>      
                        <div class="review__box">
                            <div class="review__name">
                                <p>Nguyễn Dũng</p>
                                <span>Just now</span>
                            </div>
                            <div class="review__comment">
                                ${inputCmt}
                            </div>
                        </div>
                    </div>
                </div>
        `
        const list = document.querySelector(".review__List")
        list.appendChild(newCmt)
    })
}
if (isLogin == 'true' && isAdmin == 'true') {

    var login = document.querySelector("#sign-in");
    login.innerHTML = `
            <div class="header__sign-in-true">
                    <p>Admin DUT</p>
                    <i class="fa-solid fa-caret-down"></i>
                    <ul class="header__sign-in-true__down">
                        <li><a href="../admin/dashboard.html">Manager</a></li>
                        <li><a href="../index.html" id="log-out">Logout</a></li>
                    </ul>
            </div>`
    const logout = document.querySelector("#log-out")
    logout.addEventListener("click", (e) => {
        setCookie("isAdmin", "false", 1);
        setCookie("isLogin", "false", 1);
        var login = document.querySelector("#sign-in");
        location.reload;
    })
    var cmtBox = document.querySelector('#userCmtBox')
    cmtBox.innerHTML = `<div class="review__input">
    <div class="review__avt">
        <img src="../assets/images/dungct.jpg" alt="" srcset="">
    </div>      
    <form>
        <input type="text" name="cmt" id="newComment" placeholder="Write Comment">
    <form>
    </div>`
    var input = cmtBox.querySelector('form')
    input.addEventListener("submit", (e) =>{
        e.preventDefault()
        const newCmt = document.createElement("div")
        const inputCmt = e.target.cmt.value;
        newCmt.innerHTML=`
            <div class="review__cmtBox">
                    <div class="review__input">
                        <div class="review__avt">
                            <img src="../assets/images/dungct.jpg" alt="" srcset="">
                        </div>      
                        <div class="review__box">
                            <div class="review__name">
                                <p class="admin">Admin DUT</p>
                                <span>Just now</span>
                            </div>
                            <div class="review__comment">
                                ${inputCmt}
                            </div>
                        </div>
                    </div>
                </div>
        `
        const list = document.querySelector(".review__List")
        list.appendChild(newCmt)
        e.target.cmt.value = ``;
    })
}

// if( isLogin == 'false'){
//     const login__button = document.querySelector("#sign-in-false")
//     login__button.addEventListener("click", (e) => {
//         setCookie("isLogin", "true", 1);
//     })
// }









