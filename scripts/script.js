'use strict';

const formEL = document.getElementById('forms');
const usernameEL = document.getElementById('email');
const emailEL = document.getElementById('mobile');
const mobileEL = document.getElementById('password');
const passwordEL = document.getElementById('password-conform');

formEL.addEventListener('submit',function(event){
    event.preventDefault()})
    if(usernameEL.value===''){
        const formControlEl = usernameEl.parentElement;
        formControlEl.classlist.add('error')
    }
    else{
        const formControlEl=usernameEL.parentElement;
        formControlEl.classList.add('success')
    }
    
    if(emailEL.value===''){
        const formControlEl = emailEL.parentElement;
        formControlEl.classlist.add('error')
    }
    else{
        const formControlEl=emailEL.parentElement;
        formControlEl.classList.add('success')
    }

    if(mobileEL.value===''){
        const formControlEl = mobileEL.parentElement;
        formControlEl.classlist.add('error')
    }
    else{
        const formControlEl=mobileEL.parentElement;
        formControlEl.classList.add('success')
    }

    if(passwordEL.value===''){
        const formControlEl = passwordEL.parentElement;
        formControlEl.classlist.add('error')
    }
    else{
        const formControlEl=passwordEL.parentElement;
        formControlEl.classList.add('success')
    }
    if(confirmPassword.value===''){
        const formControlEl = confirmPasswordEL.parentElement;
        formControlEl.classlist.add('error')
    }
    else{
        const formControlEl=confirmPasswordEL.parentElement;
        formControlEl.classList.add('success')
    }