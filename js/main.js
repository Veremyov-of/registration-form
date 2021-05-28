let email = document.querySelector("#inputEmail");
let userName = document.querySelector("#inputUserName");
let name = document.querySelector("#inputName");
let password = document.querySelector("#inputPassword");
let confirmPassword = document.querySelector("#inputConfirmPassword");
let checkbox = document.querySelector("#inputCheckbox");
let btnSingUp = document.querySelector(".btn");

email.addEventListener('keyup', checkEmail);
userName.addEventListener('keyup', checkUserName);
name.addEventListener('keyup', checkName);
password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkConfirmPassword);

function checkEmail() {
    let str = this.value;
    let testRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(testRegex.test(str)) {
        this.style.border = "2px solid #77FF9D";
    } else {
        this.style.border = "2px solid #FF3E3E";
    }
}

function checkUserName() {
    let str = this.value;
    let testRegex = /^[a-z][a-z0-9]{2}/i;
    if(testRegex.test(str)) {
        this.style.border = "2px solid #77FF9D";
    } else {
        this.style.border = "2px solid #FF3E3E";
    }
}

function checkName() {
    let str = this.value;
    let testRegex = /^[a-z]+/i;
    if(testRegex.test(str)) {
        this.style.border = "2px solid #77FF9D";
    } else {
        this.style.border = "2px solid #FF3E3E";
    }
}

function checkPassword() {
    let str = this.value;
    let testRegex = /^[a-z0-9]{8}/i;
    if(testRegex.test(str)) {
        this.style.border = "2px solid #77FF9D";
    } else {
        this.style.border = "2px solid #FF3E3E";
    }
}


function checkConfirmPassword() {
    if(this.value == password.value) {
        this.style.border = "2px solid #77FF9D";
    } else {
        this.style.border = "2px solid #FF3E3E";
    }
}

btnSingUp.addEventListener("click", () => {
    if(!checkbox.checked) alert("You have not accepted the Terms of Service and Privacy Policy");
});

