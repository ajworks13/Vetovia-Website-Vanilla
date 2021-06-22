// buttons need to be at the bottom of the HTML page.
document.querySelector(".emergancy").onclick = function(){
    alert("This will call your pet's primary doctor's office \nor the doctor themselves.");
}

document.querySelector(".requestAppointments").onclick = function(){
    
    let darkBackground = document.querySelector(".darkenBackground");
    let requestAppointmentsPopUp = document.querySelector(".requestAppointmentsPopUp");
    let goBack = document.querySelector(".goBack");

    darkBackground.style.display = 'block';
    requestAppointmentsPopUp.style.display = 'block';

    goBack.onclick = function(){
        darkBackground.style.display = 'none';
        requestAppointmentsPopUp.style.display = 'none';
    }
   

}
document.querySelector(".requestRefill").onclick = function(){
    
    let darkBackground = document.querySelector(".darkenBackground");
    let requestRefillPopUp = document.querySelector(".requestRefillPopUp");
    let goBack2 = document.querySelector(".goBack2");

    darkBackground.style.display = 'block';
    requestRefillPopUp.style.display = 'block';

    goBack2.onclick = function(){
        darkBackground.style.display = 'none';
        requestRefillPopUp.style.display = 'none';
    }
   

}
document.querySelector(".past").onclick = function(){
    
    let darkBackground = document.querySelector(".darkenBackground");
    let pastAppointmentsPopUp = document.querySelector(".pastAppointmentsPopUp");
    let goBack3 = document.querySelector(".goBack3");

    darkBackground.style.display = 'block';
    pastAppointmentsPopUp.style.display = 'block';

    goBack3.onclick = function(){
        darkBackground.style.display = 'none';
        pastAppointmentsPopUp.style.display = 'none';
    }
   

}

document.querySelector(".account").onclick = function(){
    
    let darkBackground = document.querySelector(".darkenBackground");
    let accountPopUp = document.querySelector(".accountPopUp");
    let goBack4 = document.querySelector(".goBack4");

    darkBackground.style.display = 'block';
    accountPopUp.style.display = 'block';

    goBack4.onclick = function(){
        console.log("clicking");
        darkBackground.style.display = 'none';
        accountPopUp.style.display = 'none';
    }
   

}

document.querySelector(".logout").onclick = function(){
    
    let darkBackground = document.querySelector(".darkenBackground");
    let logoutPopup = document.querySelector(".logoutPopup");
    let no = document.querySelector(".no");

    darkBackground.style.display = 'block';
    logoutPopup.style.display = 'block';
   
    no.onclick = function(){
        darkBackground.style.display = 'none';
        logoutPopup.style.display = 'none';
    }

}

const gender = document.getElementById('chooseGender');
const profile = document.querySelector('.profile');
const mainInfo = document.querySelector('.mainInfo');
const subInfo = document.querySelector('.subInfo');
const buttonsAndLogo = document.querySelector('.buttonsAndLogo');
const checkValue = gender.options[gender.selectedIndex].value;
const checkText = gender.options[gender.selectedIndex].text;

gender.addEventListener("change", (e) => {   
    const value = e.target.value;     

    if (value == 'boy') {    
        profile.style.backgroundColor = '#3e90cc';
        mainInfo.style.backgroundColor = '#76aada';
        subInfo.style.backgroundColor = '#76aada';
        buttonsAndLogo.style.backgroundColor = '#76aada';
    }else if(value == 'girl'){
        profile.style.backgroundColor = '#b94f75';
        mainInfo.style.backgroundColor = '#d8799c';
        subInfo.style.backgroundColor = '#d8799c';
        buttonsAndLogo.style.backgroundColor = '#d8799c';
    } else {    
        profile.style.backgroundColor = '#3ecc88';
        mainInfo.style.backgroundColor = '#acebc5';
        subInfo.style.backgroundColor = '#acebc5';
        buttonsAndLogo.style.backgroundColor = '#acebc5';

} }); 
