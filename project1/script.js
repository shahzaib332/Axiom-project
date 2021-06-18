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
//function to check if reqrd fiels have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value===''){
            showError(input,`${getField(input)}is require`);// other method(input,input.id+'is reqrd)
        }else{
            showSuccess(input);
        }
    });

}
//function to get the id of the input field with proper case
function getField(input){
    return input.id.charAt(0).toUpperCase() +input.id.slice(1)

}

//event listner
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);

    
})



