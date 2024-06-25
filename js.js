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
}