
$("#searchButton").on("click", function (event) {
  event.preventDefault();

  // grab text from search box
  var search = $("#searchButton").val();

  //  construct our URL
  // var queryURL = "https://openapi.etsy.com/v2/listings/trending?api_key=a2p83t9puv67kp0dnvsd4yka";
  //    https://openapi.etsy.com/v2/users/etsystore?api_key=a2p83t9puv67kp0dnvsd4yka
  // https://urlreq.appspot.com/req?method=GET&url=https://www.etsy.com/?=" + search + "&api_key=a2p83t9puv67kp0dnvsd4yka
  // this one works
  // https://openapi.etsy.com/v2/listings/trending?api_key=a2p83t9puv67kp0dnvsd4yka

  $.post({
    url: "/api/search"
  }, search).then(function (response) {
    console.log(response);
  });

});