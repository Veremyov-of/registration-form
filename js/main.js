let email = document.getElementById("inputEmail");
let userName = document.getElementById("inputUserName");
let name = document.getElementById("inputName");
let password = document.getElementById("inputPassword");
let confirmPassword = document.getElementById("inputConfirmPassword");
let checkbox = document.getElementById("inputCheckbox");
let btnSingUp = document.getElementsByClassName("btn");

email.addEventListener('keyup', checkEmail);
userName.addEventListener('keyup', checkUserName);
name.addEventListener('keyup', checkName);
password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkConfirmPassword);

function checkEmail() {
    let str = this.value;
    let testRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(testRegex.test(str)) {
        this.classList.remove('incorrect');
    } else {
        this.classList.add('incorrect');
    }
}

function checkUserName() {
    let str = this.value;
    let testRegex = /^[a-z][a-z0-9]{2}/i;
    if(testRegex.test(str)) {
        this.classList.remove('incorrect');
    } else {
        this.classList.add('incorrect');
    }
}

function checkName() {
    let str = this.value;
    let testRegex = /^[a-zA-Z]+$/;
    if(testRegex.test(str)) {
        this.classList.remove('incorrect');
    } else {
        this.classList.add('incorrect');
    }
}

function checkPassword() {
    let str = this.value;
    let testRegex = /^[a-z0-9]{8}/i;
    if(testRegex.test(str)) {
        this.classList.remove('incorrect');
    } else {
        this.classList.add('incorrect');
    }
}


function checkConfirmPassword() {
    if(this.value == password.value) {
        this.classList.remove('incorrect');
    } else {
        this.classList.add('incorrect');
    }
}

btnSingUp.addEventListener("click", () => {
    if(!checkbox.checked) alert("You have not accepted the Terms of Service and Privacy Policy");
});

