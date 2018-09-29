// Author: Karsten

// Hit back end to get Etsy data
$(function () {
  $('#etsy-search').on('submit', function (event) {
    event.preventDefault();
    terms = $('#etsy-terms').val().trim();
    console.log("Search terms: " + terms);
    // Validate not empty
    if (terms.length !== 0) {
      $('<p></p>').text('Searching for ' + terms).appendTo('#etsy-images');
      var $img = $("<img>").attr("src", "../imgs/loading.gif").attr("id", "loading-image");
      $("#etsy-images").append($img);
      $.ajax({
        method: "POST",
        url: "/api/search",
        data: terms,
      }).then(function (response) {
        if (response.message) {
          $("#etsy-images").html(reponse.message + ". Please try again...");
        }
        else {
          var blocks = response.substring(response.indexOf("<body>") + 6, response.indexOf('<script src="js/search.js">'));
          $("#etsy-images").empty();
          $("#auth-message").fadeIn(200, function () {
          });
          $("#etsy-images").html(blocks);
          $("#auth-message").fadeOut(4000, function () {
          });
        }
      });
    }
  });
});
