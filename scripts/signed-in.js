// listeners for data need to be at the top of the HTML page.
window.addEventListener('load', () => {
    console.log("yoo");
    
    const clinic = localStorage.getItem('CLINIC');
    const familyName = localStorage.getItem('FAMILYNAME');
    const petsName = localStorage.getItem('PETSNAME');
    const policyNum = localStorage.getItem('POLICYNUM');
    const microchipNum = localStorage.getItem('MICROCHIPNUM');
    const tagId = localStorage.getItem('TAGID');

    document.getElementById("location").innerHTML = clinic;
    document.getElementById("famName").innerHTML = familyName;
    document.getElementById("petsName").innerHTML = petsName;
    document.getElementById("policyNum").innerHTML = policyNum;
    document.getElementById("microchipNum").innerHTML = microchipNum;
    document.getElementById("tagId").innerHTML = tagId;

});

