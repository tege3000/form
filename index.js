let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

const submit = document.querySelector(".submitBtn");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    if(password.value != confirmPassword.value) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
    else {
        password.style.border = "1px solid #E5E7EB";
        confirmPassword.style.border = "1px solid #E5E7EB";
    }
})

