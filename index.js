const zip = document.getElementById("zip");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conf = document.getElementById("conf");

//email check and custom message
email.addEventListener("input", (event) => {
    
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

//zipcode check and custom message
zip.addEventListener("input", (event) => {
   
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity("I am expecting an valid zip code!");
  } else {
    zip.setCustomValidity("");
  }
});
//password check
password.addEventListener("input", (event) => {
   
    if (password.validity.patternMismatch) {
      password.setCustomValidity("Password must contain eight characters including one uppercase letter, one lowercase letter, and one number or special character");
    } else {
      password.setCustomValidity("");
    }
  });
  
//make sure passwords match

conf.addEventListener("input", (event) => {
   
    if (conf.value != document.getElementById('password').value) {
      conf.setCustomValidity("Passwords must match");
    } else {
      conf.setCustomValidity("");
    }
  });
/*
  function check() {
    var input = document.getElementById('password_confirm');
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}
*/
