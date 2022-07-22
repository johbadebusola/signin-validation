let airtelCode = ["0802","0902","0701","0808","0708","0812"];
let gloCode = ["0805","0905","0807","0811","0705","0815"];
let etisalatCode = ["0908","0818","0809","0817","0909"];
let mtnCode = ["0803","0703","0903","0806","0706","0813","0810","0814","0816"];
let teleNo = document.querySelector("#tele");
let networkLogo = document.querySelector("#tele-label");
let error = document.querySelector("#error");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
function send(Event){
    // event.preventDefault();
    //first name validation
    if (fname.value.trim() === ""){
        error.innerHTML = "*First name Cannot be empty"
        error.style.color = "red"
        fname.style.border = "1px solid red"
        error.style.fontFamily = "monospace"
           return false;
       }
       else{
        fname.style.border = "1px solid green"
       }
       // last name validation
       if (lname.value.trim() === ""){
        error.innerHTML = "*Last name Cannot be empty"
        error.style.color = "red"
        lname.style.border = "1px solid red"
        error.style.fontFamily = "monospace"
           return false;
       }
       else{
        lname.style.border = "1px solid green"
       }
        // email validations
      if (!email.value.match(/^[a-zA-Z0-9_\.]+@([gmail]|[live]|[yahoo])+\.[a-z]{2,3}$/)){
        error.innerHTML = "*This is not an email"
        error.style.color = "red"
        email.style.border = "1px solid red"
        error.style.fontFamily = "monospace"
           return false;
       }else{
        email.style.border = "1px solid green"
    }
       // telephone number validations
    if (teleNo.value.trim() === ""){
     error.innerHTML = "*Cannot be empty"
     error.style.color = "red"
     teleNo.style.border = "1px solid red"
     error.style.fontFamily = "monospace"
        return false;
    }
    if (!teleNo.value.match(/^([0][8][0][2]|[0][9][0][2]|[0][7][0][1]|[0][8][0][8]|[0][7][0][8]|[0][8][1][2])[0-9]{7}$/)){
        error.innerHTML = "*Only Airtel no is allowed"
        error.style.color = "tomato"
        return false;
      }else{
        teleNo.style.border = "1px solid green"
    }
    // validations for password
    if (pass.value.length < 7 ){
        error.innerHTML = "*Password must be more than 7 characters "
        error.style.color = "red"
        teleNo.style.border = "1px solid red"
        error.style.fontFamily = "monospace"
           return false;
       }
    else{
        error.innerHTML = ""
        console.log("submitted")
    }
  //Saving sign up details in local storage
let details =  JSON.parse(localStorage.getItem("allData")) ||  []  ;
let userLogin = 
    {
        firstName:fname.value,
        lastName:lname.value,
        email:email.value,
        password:pass.value
}
details.push(userLogin);
localStorage.setItem("allData", JSON.stringify(details));

console.log(userLogin)
}

teleNo.addEventListener("input", displayNetwork);
function displayNetwork(){
    if(teleNo.value.trim() === "" ){
        networkLogo.style.background = "none"
    }

    
    //displaying Airtel logo
    for (let i=0; i < airtelCode.length; i++){

       
        if(teleNo.value === airtelCode[i]){
            networkLogo.style.background = `url("airtel-logo.png") center/100% 100%`
        }
    }
    //displaying mtn logo
    for (let i=0; i < mtnCode.length; i++){
        if(teleNo.value === mtnCode[i]){
            networkLogo.style.background = `url("mtn-logo.jpg") center/100% 100%`
        }
    }
     //displaying glo logo
     for (let i=0; i < gloCode.length; i++){
        if(teleNo.value === gloCode[i]){
            networkLogo.style.background = `url("glo-logo.png") center/100% 100%`
        }
    }
     //displaying 9mobile logo
     for (let i=0; i < etisalatCode.length; i++){
        if(teleNo.value === etisalatCode[i]){
            networkLogo.style.background = `url("9mobile-logo.png") center/100% 100%`
        }
    }

}

