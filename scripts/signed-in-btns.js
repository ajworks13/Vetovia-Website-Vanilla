// buttons need to be at the bottom of the HTML page.
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
