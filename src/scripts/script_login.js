document.getElementsByClassName("entrar")[0].addEventListener("click", function (event) {
    event.preventDefault();

    let errorMessage = "";


    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("senha");


    function emailRegulaments() {
        function validateEmail(email) {
            const emailRules = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRules.test(email);
        }

        if (emailField.value === "") {
            errorMessage += "Por favor, preencha o email.<br>";
            emailField.style.border = "1px solid red";
        } else if (!validateEmail(emailField.value)) {
            errorMessage += "Por favor, insira um e-mail válido!<br>";
            emailField.style.border = "1px solid red";
        } else {
            emailField.style.border = "";
        }
    }


    function passwordAccount() {
        const minPassword = 8;
        const size = passwordField.value.length;

        if (passwordField.value === "") {
            errorMessage += "Por favor, preencha sua senha.<br>";
            passwordField.style.border = "1px solid red";
        } else if (size < minPassword) {
            errorMessage += `A senha deve ter no mínimo ${minPassword} caracteres!<br>`;
            passwordField.style.border = "1px solid red";
            passwordField.value = passwordField.value.slice(0, minPassword);
        } else {
            passwordField.style.border = "";
        }
    }

    emailRegulaments();
    passwordAccount();


    const errorDiv = document.getElementById("error-message");
    if (errorMessage !== "") {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = errorMessage;
    } else {
        errorDiv.style.display = "none";
        window.location.href = "/indexForm.html";
    }

    cleanMessage();
});

function cleanMessage() {
    setTimeout(function () {
        const errorDiv = document.getElementById("error-message");
        errorDiv.style.display = "none";
    }, 4000);
}
