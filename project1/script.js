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

    }else{
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



