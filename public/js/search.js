// Author: Karsten

// Hit back end to get Etsy data
$(function () {
  $('#etsy-search').on('submit', function (event) {
    event.preventDefault();
    terms = $('#etsy-terms').val().trim();
    console.log(terms);
    // Validate not empty
    if (terms.length !== 0) {
      $('<p></p>').text('Searching for ' + terms).appendTo('#etsy-images');
      $.ajax({
        method: "POST",
        url: "/api/search",
        data: terms,
      }).then(function (response) {
        console.log(response);
      });
    }
  });
});