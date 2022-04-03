// to get input and submit on login page
const myform = document.getElementById('myform');
const username = document.getElementById('UserName');
const password = document.getElementById('PassWord');
//to get input and submit on register page
const form_reg = document.getElementById('form-register');
const acc_usr = document.getElementById('username-reg');
const acc_pwd = document.getElementById('password-reg');

//accounts (security 0 xD)
//let accs_usr = ['admin'];
//let accs_pwd = ['admin'];

// wrong password or username login page
const msgfieldswrng = document.getElementById('msg-fields-wrong');
// fill the fields error on login page
const msgFields = document.getElementById('msg-fields'); 
//fill the fields error on register
const msgFieldsreg = document.getElementById('msg-fields-reg');

//account exist error
//const msgFieldsreg_exist = document.getElementById('msg-fields-reg-exist');

//to submit for login
if (myform){
    myform.addEventListener('submit', logSubmit);
}
//to submit for register
if (form_reg){
    form_reg.addEventListener('submit', regiSubmit);
}

function regiSubmit(rg){
    rg.preventDefault();

    if(acc_usr.value === '' || acc_pwd.value === ''){
        msgFieldsreg.innerText = 'Please Enter empty fields!';
        setTimeout(() => msgFieldsreg.remove(), 5000);
    }
    // else if(acc_usr.value == accs_usr.includes(acc_usr.value)) {
    //     msgFieldsreg_exist.innerText = 'This account name is used befor.';
    //     setTimeout(() => msgFieldsreg_exist.remove(), 5000);
    // }
    else {
        document.cookie = `cok_usr=${acc_usr.value};path=/`;
        document.cookie = `cok_pwd=${acc_pwd.value};path=/`;
        // accs_usr.push(acc_usr.value)
        // accs_pwd.push(acc_pwd.value)
    }
}
//to get cookies by its key
var cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

function logSubmit(lg){
    lg.preventDefault();

    if(username.value === '' || password.value === ''){
        msgFields.innerText = 'Please Enter fields!!';
        setTimeout(() => msgFields.remove(), 5000);
    }
    else if(username.value === cookies.cok_usr){
        if(password.value === cookies.cok_pwd)
        window.location.replace('success-login.html')

    }
    else {
        msgfieldswrng.innerText = 'wrong username or password.';
        setTimeout(() => msgfieldswrng.remove(), 5000);
    }
    // else if (username.value == accs_usr.includes(username.value)) {
    //     console.log('that means this statemnt is working.');
    // }

}

// function logSubmit(b){
//     b.preventDefault();

//     if(username.value === 'ahmed', password.value === '123'){
//         window.location.replace('success-login.html')
//     }
//     else {
//         msgFields.innerHTML = 'Wrong username or password.';
//         setTimeout(() => msgFields.remove(), 3000);
//     }

// }









// let value = 1
// let accs_user = ['ahmed','khaled'];
// let pass_user = ['123','321'];
// //accs_user.push(value)
// //accs_user.indexOf(value)
// // console.log(accs_user);
// console.log(accs_user.includes('ahmed'))
// function othername() {
//     var input = document.getElementById("userInput").value;