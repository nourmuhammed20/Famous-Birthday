var birthdaycopy;
$(document).ready(function () {
  $("#form").submit(function (e) {


    let fullname = $("#fname_id").val();

    let username1 = $("#uname_id").val();
    let email = $("#email_id").val();
    let password = $("#password_id").val();
    let password2 = $("password2_id").val();

    let phone = $("#phone").val();
    let address = $("#address_id").val();
    let image = $("#img_id")[0].files[0]; // get the first file from the input element
    let birthdate = $("#bd_id").val();
    birthdaycopy =birthdate;

    e.preventDefault();

    let formData = new FormData();
    formData.append("name", fullname);
    formData.append("username", username1);
    formData.append("password", password);
    formData.append("birthday", birthdate);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("image", image);

    $.ajax({
      url: "DB_Ops.php",
      method: "POST",
      dataType: "json",
      data: formData, // use the FormData object
      contentType: false, // set contentType and processData to false to prevent jQuery from automatically processing the data
      processData: false,

      success: function (response) {
        if (response["success"]) {
          $("#fname_id").val("");
          $("#uname_id").val("");
          $("#email_id").val("");
          $("#password_id").val("");
          $("#password2_id").val("");
          $("#phone").val("");
          $("#address_id").val("");
          $("#img_id").val("");
          $("#birthday").val(null);

          $("#message").html(response["message"]);
          $("#message").parent().addClass("text-success");
          $("#message").parent().removeClass("text-danger");
          $("#message")
            .parent()
            .parent()
            .addClass("border-success ");
          $("#message")
            .parent()
            .parent()
            .removeClass("border-danger d-none");
        } else {
          $("#message").html(response["error"]);
          $("#message").parent().parent().addClass("text-danger");
          $("#message").parent().parent().removeClass("text-success");

          $("#message")
            .parent()
            .parent()
            .removeClass("border-success  d-none");
          $("#message")
            .parent()
            .parent()
            .addClass("border-danger ");
        }
      },
      error: function (x, y, z) {
        console.log(x);
        console.log(y);
        console.log(z);
      },
    });
  });
});



document.querySelector('#search-btn').addEventListener('click',function (e) {
  e.preventDefault();
  // Show the loading message
  let names = $("#names");
  names.html("<h6 class='text-center' style='color:#5e2ced;'>Please Wait until Loading data from API...</h6>");

  // Hide the results and show the loading message for 7 seconds
  let timeout = setTimeout(function () {
    names.hide();
    names.html("");
    names.fadeIn();
  }, 10000);

  // Send an AJAX request to the API_Ops.php file with the birthday parameter
  $.ajax({
    url: "API_Ops.php",
    data: {
      birthday: birthdaycopy,
    },
    success: function (response) {
      // Clear the timeout to cancel the hiding of the results and showing of the loading message
      clearTimeout(timeout);
      // Show the results
      response = JSON.parse(response);
      if (response.length > 0) {
        names.addClass("overflow-x-scroll");
        names.empty();
        response.forEach((element) => {
          names.append(
            `<div class='col-lg-3 mb-3 text-center mx-3'><h6 class='text-light  py-2 rounded-5' style="background-color: blueviolet;">${element}</h6></div>`
          );
        });
      } else {
        names.html("<h4  style='color:#5e2ced;>No Famous Actor Born at given Date</h4>");
      }

      // Hide the loading message and show the results
      names.hide();
      names.fadeIn();
    },
    error: function (x, y, z) {
      // Clear the timeout to cancel the hiding of the results and showing of the loading message
      clearTimeout(timeout);

      // Show an error message
      names.html("<h4  style='color:#ff0000;>An error occurred while loading data from API</h4>");

      // Hide the loading message and show the error message
      names.hide();
      names.fadeIn();
    },
  });
})
