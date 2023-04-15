const form = document.getElementById("#form");
const fullname = document.getElementById("fname_id");

const username1 = document.getElementById("uname_id");
const email = document.querySelector("#email_id");
const password = document.getElementById("password_id");
const password2 = document.getElementById("password2_id");
const submitBtn = document.querySelector("#submitBtn");
const phone = document.getElementById("phone");
const address = document.getElementById("address_id");
const birthDate = document.getElementById("bd_id");
const image = document.getElementById("img_id");
const errorLabel = document.querySelector("#uname_response");

// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

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
  birthDate.addEventListener("blur", function(){
    birthDateValidation();

  });
  birthDate.addEventListener("change", function(){
    birthDateValidation();

  });

}

submit();

// Add event listener to each input field to check if it contains "is-invalid" class
// [
//   fullname,
//   username1,
//   email,
//   password,
//   password2,
//   phone,
//   address,
//   birthDate,
//   image,
// ].forEach((input) => {
//   input.addEventListener("input", () => {
//     if (form.querySelectorAll(".is-invalid").length > 0) {
//       submitBtn.disabled = true;
//     } else {
//       submitBtn.disabled = false;
//     }
//   });
// });

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
    birthDate.classList.add("is-invalid");
    birthDate.classList.remove("is-valid");
  } else {
    const selectedDate = new Date(birthDateValue);
    if (
      selectedDate.getFullYear() < 1900 ||
      selectedDate.getFullYear() > 2023
    ) {
      birthDate.classList.remove("is-valid");
      birthDate.classList.add("is-invalid");
    } else {
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
$(document).ready(function () {
  const username1 = document.getElementById("uname_id");

  $("#uname_id").keyup(function () {
    var username = $(this).val().trim();
    if (username != "") {
      $.ajax({
        url: "Server-side.php",
        type: "post",
        data: { username: username },
        success: function (response) {
          let elem = `<span style='color: green;'>${response}</span>`;
          if (response === "Available") {
            username1.classList.add("is-valid");
            username1.classList.remove("is-invalid");
          } else {
            username1.classList.add("is-invalid");
            username1.classList.remove("is-valid");
          }
        },
      });
    } else {
      $("#uname_response").html("");
      username1.classList.remove("is-invalid");
      username1.classList.add("is-valid");
    }
  });
})






// function check()
// {
//   let inputs =document.querySelectorAll('input');
// inputsArray=Array.from(inputs);
// let ctr = 0;
// for (const i of inputsArray) {
  
//   console.log(i);
  
// }


// submitBtn.addEventListener("click", function(event) {
//   // prevent default form submission behavior
//   event.preventDefault();

//   // check if any input field is invalid
//   if (document.querySelectorAll(".is-invalid").length > 0) {
//     submitBtn.disabled = true;
//     return;
//   }
//   //check();
//   console.log(email);


//   // if all input fields are valid, submit the form
//   form.submit();
// });
// }