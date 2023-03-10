let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');
let btn = document.querySelector('#btn');
let form = document.querySelector('#form')
let form2 = document.querySelector('#main-form')

function showError(input,message){
    const form = input.parentElement
    form.className = "form error";
    const span = document.querySelector('span');
    span.innerText = message;
}
function showSuccess(input){
    const form = input.parentElement
    form.className = "form success";
}

function checkmail(input) {
	const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(RegEx.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,"Email Is Not Vailed")
    }
}

function InputLenth(input,min,max){
    if(input.value.lenth < min){
        showError(input, `${fieldName(input)} Input At Least ${min} Characters`)
    }else if(input.value.lenth > max){
        showError(input, `${fieldName(input)} Input Less then ${max} Characters`)
    }else{
        showSuccess(input)
    }
}

function fieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function confirmPass(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password In Not Same")
    }
}

form2.addEventListener('submit',(event)=>{
    event.preventDefault();
    InputLenth(username,3,20)
    InputLenth(password,8,20)
    checkmail(email);
    confirmPass(password,password2);
})