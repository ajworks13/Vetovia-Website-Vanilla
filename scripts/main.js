
// document.querySelector(".signInButton").onclick = function(){
//     window.location.href = "/main-screen/signed-in-main.html"

//     // const email = document.getElementById("email").value;
//     // const password = document.getElementById("password").value;

//     // localStorage.setItem("EMAIL", email);
//     // localStorage.setItem("PASSWORD", password);

//     // return;
// }


/*
    THIS PART IS FOR 'sign-in.html'
*/

function handleInfo(){
    window.location.href = "/main-screen/signed-in-main.html"

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("EMAIL", email);
    localStorage.setItem("PASSWORD", password);

    return;
}

function display(){
    let passwordInput = document.querySelector(".password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}






/*
    THIS PART IS FOR 'sign-up.html'
*/

function accountCreated(){
    window.location.href = "/main-screen/signed-in-main.html"

    const clinic = document.getElementById("clinic").value;
    const familyName = document.getElementById("familyName").value;
    const petsName = document.getElementById("petsName").value;
    const policyNum = document.getElementById("policyNum").value;
    const microchipNum = document.getElementById("microchipNum").value;
    const tagId = document.getElementById("tagId").value;

    localStorage.setItem("CLINIC", clinic);
    localStorage.setItem("FAMILYNAME", familyName);
    localStorage.setItem("PETSNAME", petsName);
    localStorage.setItem("POLICYNUM", policyNum);
    localStorage.setItem("MICROCHIPNUM", microchipNum);
    localStorage.setItem("TAGID", tagId);

    return;
}
