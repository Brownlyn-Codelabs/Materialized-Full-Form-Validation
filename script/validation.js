
// Input Fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const form = document.getElementById('myForm')

//validation colors
const green = '#4CAF50';
const red = '#F44336';


    //VALIDATORS

//firstname
function validateFirstName(){
    // check if empty
if(checkIfEmpty(firstName)) return;
    // check if only letters
if(!checkIfOnlyLetters(firstName)) return;
    return true;

}

//lastname
function validateLastName(){
        // check if empty
if(checkIfEmpty(lastName)) return;
// check if only letters
if(!checkIfOnlyLetters(lastName)) return;
return true;
}

//password
function validatePassword(){
    //check if Empty
if(checkIfEmpty(password)) return;
    //check lenght of password
if(!meetLength(password, 4, 100)) return;
return true;
}



//Confirm password
function validateConfirmPassword(){
    //check if password is valid
if(password.className !== 'valid'){
    setInvalid(confirmPassword,'Password must be valid');
    return;
    //check if they match
}else if(password.value !== confirmPassword.value){
    setInvalid(confirmPassword, 'Passwords must match');
    return;
}else{
    setValid(confirmPassword);
}
    return true;
}



// Utility Functions

function checkIfEmpty(field){
    if (isEmpty(field.value.trim())) {
        //set field Invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    }else{
        //set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value){
    if(value === '') return true;
    return false;
}

//setting Invalid function
function setInvalid(field,message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

//setting valid function
function setValid(field){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
}

//checking for letters
function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} must contain only letters`);
      return false;
    }
  }

  // settng the length for password Inputs

  function meetLength(field, minlenth, maxlength){
    if(field.value.length >= minlenth && field.value.length < maxlength){
        //set valid field
        setValid(field);
        return true;
    }else if(field.value.length < minlenth){
        // set invalid field
        setInvalid(field, `${field.name} must be at least ${minlenth} characters long`);
        return false;
    }else{
        setInvalid(field, `${field.name} must be shorter than ${maxlength} characters`);
        return false;
    }
    
}