let slider = document.querySelector('#slider')

let button = document.querySelector('.button')

let size = document.querySelector('#valor')

let password = document.querySelector('.password2')

let password_div = document.querySelector('.password')

let  caractere = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_/*-+.{}[]<>?/'

let novaSenha ='';

size.innerHTML = slider.value;

slider.oninput = function() {
    size.innerHTML = this.value
}

function generatePassword() {
    let pass = '';

    for (let i = 0, n = caractere.length; i < slider.value; ++i){

        pass += caractere.charAt(Math.floor(Math.random() * n))
        
    }

    password_div.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}


function copyPassword(){
    alert("senha copiada com sucesso")

    navigator.clipboard.writeText(novaSenha);
}

const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const uppercaseRequirement = document.getElementById("uppercase-requirement");
const lowercaseRequirement = document.getElementById("lowercase-requirement");
const numbersRequirement = document.getElementById("numbers-requirement");
const symbolsRequiremnet = document.getElementById("symbols-requirement");
const lengthRequirement = document.getElementById("length-requirement");


passwordInput.addEventListener('input', checkPassword);

function checkPassword(){
    const passwordValid = passwordInput.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numbersRegex = /\d/;
    const symbolsRegex = /\W/;


    const uppercaseFulfilled = uppercaseRegex.test(passwordValid)
    const lowercaseFulfilled = lowercaseRegex.test(passwordValid)
    const numberseFulfilled = numbersRegex.test(passwordValid)
    const symbolsFulfilled = symbolsRegex.test(passwordValid)
    const lengthFulfilled = passwordValid.length >= 8;

    uppercaseRequirement.classList.toggle('fulfilled', uppercaseFulfilled)
    lowercaseRequirement.classList.toggle('fulfilled', lowercaseFulfilled)
    numbersRequirement.classList.toggle('fulfilled', numberseFulfilled)
    symbolsRequiremnet.classList.toggle('fulfilled', symbolsFulfilled)
    lengthRequirement.classList.toggle('fulfilled', lengthFulfilled)

    const isButtonDisabled = 
    !uppercaseFulfilled||
    !lowercaseFulfilled||
    !numberseFulfilled||
    !symbolsFulfilled||
    !lengthFulfilled
    ;

    submitButton.disabled = isButtonDisabled;


}

submitButton.addEventListener('click', function(){
    console.log('botão clicado!');
})

