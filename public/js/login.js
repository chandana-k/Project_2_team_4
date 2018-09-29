$(document).ready(function () {

  // Trigger modal for loggin in
  $("#login-modal").on("click", function (event) {
    event.preventDefault();
    $("#authenticator-button").html("Log In").attr("id", "login-button");
    bindHandler();
    $("#modal").modal("toggle");

  });
  // Getting references to our form and inputs

  // When the form is submitted, we validate there's an email and password entered
  function bindHandler() {
    $("#login-button").on("click", function (event) {
      $("#login-button").html("Log In").attr("id", "authenticator-button");
      event.preventDefault();
      var email = $("#email-input").val();
      var pass = $("#password-input").val();

      if (!email || !pass) {
        return;
      }

      // If we have an email and password we run the loginUser function and clear the form
      $("#email-input").val("");
      $("#passwordInput").val("");
      loginUser(email, pass);
    });
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post({
      url: "/api/login",
      data: {
        email: email,
        password: password
      },
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function (err) {
      console.log(err);
    });
  }

});
