const zip = document.getElementById("zip");
const email = document.getElementById("email");
const password = document.getElementById("password");



email.addEventListener("input", (event) => {
    
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});


zip.addEventListener("input", (event) => {
   
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity("I am expecting an valid zip code!");
  } else {
    zip.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {
   
    if (password.validity.patternMismatch) {
      password.setCustomValidity("Password must contain eight characters including one uppercase letter, one lowercase letter, and one number or special character");
    } else {
      password.setCustomValidity("");
    }
  });
  




