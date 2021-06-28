let togglePs = document.querySelector("#togglePs");
let passwordInput = document.querySelector(".password");

togglePs.addEventListener('click', function (e) {

    // toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});