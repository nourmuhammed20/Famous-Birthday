const form = document.getElementById("form");
const fullname = document.getElementById("fname_id");

const username1 = document.getElementById("uname_id");
const email = document.querySelector("#email_id");
const password = document.getElementById("password_id");
const password2 = document.getElementById("password2_id");

const phone = document.getElementById("phone");
const address = document.getElementById("address_id");
const birthDate = document.getElementById("bd_id");
const image = document.getElementById("img_id");

function submit() {
  fullname.addEventListener("keyup", function () {
    nameValidation();
  });
  email.addEventListener("keyup", function () {
    emailValidation();
  });
  phone.addEventListener("keyup", function () {
    phoneValidation();
  });
  password.addEventListener("keyup", function () {
    passwordValidation();
  });
  password2.addEventListener("keyup", function () {
    passwordConfirmation();
  });
  address.addEventListener("keyup", function () {
    addressValidation();
  });

  image.addEventListener("change", function () {
    validateImage();
  });
  birthDate.addEventListener("blur", birthDateValidation);
  birthDate.addEventListener("change", birthDateValidation);

  // username.addEventListener("change", function () {
  //   checkUser();
  // });
}
submit();

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     const  fullnameValue = fullname.value.trim();
//     const phoneValue =  phone.value.trim();
//     const addressValue = address.value.trim();
//     const  birthDateValue = birthDate.value.trim();
//     const imageValue = image.value.trim();

//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//     const literalChars = /[a-zA-Z]/;

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Please, Enter a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else if (! literalChars.test(passwordValue)) {
//         setError(password, 'Password must include at least one literal character.')
//     } else if (! specialChars.test(passwordValue)) {
//         setError(password, 'Password must include at least one special character.')
//     }  else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Password doesn't match");
//     } else {
//         setSuccess(password2);
//     }

//     if(fullnameValue === '') {
//         setError(fullname, 'Please, Enter your Full Name');
//     } else {
//         setSuccess(fullname);
//     }

//     if(phoneValue === '') {
//         setError(phone, 'phone number is required');
//     } else {
//         setSuccess(phone);
//     }

//     if(addressValue === '') {
//         setError(address, 'addrress is required');
//     } else {
//         setSuccess(address);
//     }

//     if(birthDateValue === '') {
//         setError(birthDate, 'BirthDate is required');
//     }
//      else {
//         setSuccess(birthDate);
//     }

//     if(imageValue === '') {
//         setError(image, 'image is required');
//     } else {
//         setSuccess(image);
//     }

// };
function nameValidation() {
  var fnameValid = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

  if (fnameValid.test(fullname.value)) {
    document.querySelector("#fname_id").classList.add("is-valid");
    document.querySelector("#fname_id").classList.remove("is-invalid");
  } else {
    document.querySelector("#fname_id").classList.add("is-invalid");
    document.querySelector("#fname_id").classList.remove("is-valid");
  }
}
function emailValidation() {
  var emailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailValid.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
}
function phoneValidation() {
  var phonevalid = /^(01[0125]|0100|0101)\d{8}$/;

  if (phonevalid.test(phone.value)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  } else {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  }
}
function passwordValidation() {
  passwordValid =
    /^(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;'"<>,.?/-])(?=.*[a-zA-Z]).{8,}$/;
  if (passwordValid.test(password.value)) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }
}

function passwordConfirmation() {
  if (password.value == password2.value) {
    password2.classList.add("is-valid");
    password2.classList.remove("is-invalid");
  } else {
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
  }
}
function addressValidation() {
  addressValue = document.getElementById("address_id").value;

  if (addressValue.length > 0) {
    address.classList.add("is-valid");
    address.classList.remove("is-invalid");
  } else {
    address.classList.remove("is-valid");
    address.classList.add("is-invalid");
  }
}

function birthDateValidation() {
  const birthDate = document.getElementById("bd_id");
  const birthDateValue = birthDate.value;

  if (birthDateValue === "") {
    birthDate.classList.remove("is-valid");
    birthDate.classList.add("is-invalid");
  } else {
    const selectedDate = new Date(birthDateValue);
  if (selectedDate.getFullYear() < 1900 || selectedDate.getFullYear() > 2023) {
      birthDate.classList.remove("is-valid");
      birthDate.classList.add("is-invalid");
    }else {
      birthDate.classList.remove("is-invalid");
      birthDate.classList.add("is-valid");
    }
  }
}

function validateImage() {
  const imageValue = image.value;

  if (imageValue === "") {
    // If the value is empty, display an error message
    image.classList.add("is-invalid");
    image.classList.remove("is-valid");
  } else {
    // If a file is selected, remove the error message
    image.classList.add("is-valid");
    image.classList.remove("is-invalid");
  }
}

//still has error 
$(document).ready(function(){
  const username1 = document.getElementById("uname_id");

  $("#uname_id").keyup(function(){
      var username = $(this).val().trim();
      if(username != ''){
          $.ajax({
              url: 'Server-side.php',
              type: 'post',
              data: {username: username},
              success: function(response){
                  $('#uname_response').html(response);
                  username1.classList.add("is-invalid");
                  username1.classList.remove("is-valid");
              }
          });
      }else{
          $("#uname_response").html("");
          username1.classList.remove("is-invalid");
          username1.classList.add("is-valid");
      }
  });

  // add blur event listener to validate after the input field loses focus
  $("#uname_id").blur(function(){
      if($(this).val().trim() == ''){
          $("#uname_response").html("");
          username1.classList.remove("is-invalid");
          username1.classList.remove("is-valid");
      }else{
          if(username1.classList.contains("is-invalid")){
              username1.classList.remove("is-invalid");
              username1.classList.add("is-valid");
          }
      }
  });
});



