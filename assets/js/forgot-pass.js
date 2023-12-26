
var forgot_password = document.querySelector("#forgot-password");
var forgot_p_modal = document.querySelector('#forgot-pass-modal')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

forgot_password.addEventListener("click", (e) => {
    forgot_p_modal.classList.toggle("active")
    forgot_p_modal.innerHTML=`
    <div class="mask"></div>
    <div class="forgot-pass-box" >
        <h2>forgot password</h2>
    
        <form id="forgot-form">
        <div class="input-fgpass">
            <label for="email-phone" class="input-fgpass">
                Email/Phone Number:
            </label>
            <br>
            <input type="email" id="email-phone" name="email-phone" class="input-fgpass" required>
            <br>
        </div>
    
        <div class="input-otp">
            <label for="otp" class="input-otp-box">
                OTP:
            </label>
            <br>
            <input type="text" id="otp" name="otp" class="input-otp-box" required>
            <button class="get-code">Get Code</button>
        </div>
        <button type="submit" class="button-next">Next</button>
        </form>
        
        </div>
            
    `
    var mask = document.querySelector(".mask")
    var getCode = document.querySelector(".get-code")
    var form = document.querySelector("#forgot-form")
    getCode.addEventListener("click", (e) => {
        e.preventDefault()
        var otp = document.querySelector("#otp")
        var otpNum = getRandomInt(999999);
        otp.value= otpNum;
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        forgot_p_modal.innerHTML=`
        <div class="mask"></div>
        <div class="forgot-pass-box2">
        <h2>forgot password</h2>

        <form id="form-reset">
        <div class="input-new-pass">
            <label for="new-pass" class="new-pass">
                New Password:
            </label>
            <br>
            <input type="password" id="new-pass" name="new-pass" class="new-pass" required>
            <br>
        </div>

        <ul class="note">
            <li>Be at least 10 characters</li>
            <li>Include at least one uppercase letter</li>
            <li>Include at least one number</li>
            <li>Include at least one symbol</li>
        </ul>

        <div class="input-new-pass">
            <label for="input-new-pass" class="input-new-pass">
                Retype New Password:
            </label>
            <br>
            <input type="password" id="input-new-pass" name="input-new-pass" class="input-new-pass" required>
        </div>
        <button type="submit" class="button-next">reset password</button>
        </form>

        
        </div>
        `
        mask = document.querySelector(".mask")
        mask.addEventListener("click", (e) => {
            forgot_p_modal.classList.toggle("active")
        })
        
        var formReset = document.querySelector("#form-reset")

        formReset.addEventListener("submit", (e) => {
            e.preventDefault()
            forgot_p_modal.classList.toggle("active")
        })

    })

    mask.addEventListener("click", (e) => {
        forgot_p_modal.classList.toggle("active")
    })
})


