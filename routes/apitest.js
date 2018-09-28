// require api via request

// require api keys

var keys = require("../keys.js");
console.log("keys", keys);


module.exports = function (app) {
  console.log(app);
  var request = new XMLHttpRequest();

  request.open('GET', "https://openapi.etsy.com/v2/listings/active.js?keywords=soap&limit=12&includes=Images:1&api_key=a2p83t9puv67kp0dnvsd4yka", true);
  request.onload = function () {

    // access JSON data here
    var data = JSON.parse(this.response);

    request({
      ETSY_SECRET: process.env.ETSY_SECRET,
      ETSY_ID: process.env.ETSY_ID
    });
    console.log("here are the keys");
    console.log(process.env.ETSY_SECRET);

    if (request.status >= 200 && request.status < 400) {
      data.forEach(function (request) {
        console.log(request);
      });
    } else {
      console.log('error');
    }
  };

  request.send(data);
};

module.exports = function (app) {
  app.get("/etsy", function (req, res) {
    console.log("etsy route is hit");
    console.log(res);
    //  var searchButton = function() {
    //         var request = require("request");

    //         request({
    //             ETSY_SECRET: process.env.ETSY_SECRET,
    //             ETSY_ID: process.env.ETSY_ID
    //         });
    //     };

    //     res.sendFile(path.join(__dirname, "../public/example.html"));
    //     searchButton();
  });
};
