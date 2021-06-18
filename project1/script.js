//document.getElementById('form')                 //js will go to doc in html and the get id and the search form

const form=document.getElementById('form') ;//const is not updateable let is. 
const username=document.getElementById('username') ;
const email=document.getElementById('email') ;
const password=document.getElementById('password') ;
const password2=document.getElementById('password2') ;
//All Functions
//Functions to show error
function showError(input,message) {
    const formControl=input.parentElement;//formcontrol me username access hoga
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText =message;

}
//function to show success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success';

}
//function to check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());//copy from google



}

//event listner
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    if(username.value===''){
        //alert("Username can't be empty");we wont use popup msg bcz its old fashion
        showError(username,'Username is required');

    }else{
        showSuccess(username);
    }
    if(email.value===''){
        showError(email,'email is required');

    }else if(!isValidEmail(email.value)){
        showError(email,'Email is ivalid');

    }
    else{
        showSuccess(email);
    }
    if(password.value===''){
        showError(password,'Password is required');

    }else{
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'Confirm Password is required');

    }else{
        showSuccess(password2);
    }
})



