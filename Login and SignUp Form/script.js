const containerForm = document.getElementById("containerForm");

const logIn = document.getElementById("logIn");
const signIn = document.getElementById("signIn");

const signUpForm = document.getElementById('signUpForm');
const logInForm = document.getElementById("logInForm");

signIn.addEventListener("click", function () {
    containerForm.style.transform = "rotateZ(45deg)";
    logIn.style.display = "block";
    signIn.style.display = "none";

    signUpForm.style.cssText = "opacity: 1; transition: 1500ms; z-index: 50;";
    logInForm.style.cssText = "opacity: 0; transition: 500ms; z-index: -20;";

});

logIn.addEventListener("click", function () {
    containerForm.style.transform = "rotateZ(135deg)";

    signIn.style.display = "block";
    logIn.style.display = "none";

    signUpForm.style.cssText = "opacity: 0; transition: 500ms; z-index: -20";;
    logInForm.style.cssText = "opacity: 1; transition: 1500ms; z-index: 50;"

});
