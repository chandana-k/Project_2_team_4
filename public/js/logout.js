
// Author: Karsten
// Handles logging user out by clicking nav on front end

// Click handler
$("#logout-link").on("click", function (event) {
  // Prevent default action (#)
  event.preventDefault();
  // Hit logout route
  $.get({
    url: "/logout"
  }).then(function (response) {
    console.log(response);
  });
});
