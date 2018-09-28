
// Hit back end to get Etsy data

$(function () {
  $('#etsy-search').on('submit', function (event) {
    event.preventDefault();
    terms = $('#etsy-terms').val();
    console.log(terms);
    $('<p></p>').text('Searching for ' + terms).appendTo('#etsy-images');
    $.ajax({
      method: "POST",
      url: "/api/search",
      data: terms,
    }).then(function (response) {
      console.log(response);
    });
  });
});