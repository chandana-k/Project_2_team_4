// require api via request 

    var keys = require("../public/keys.js");

        keys.find({  }, function(err, res) {

            if (err) {
                console.log(err);
            }
            console.log(JSON.stringify(res, null, 2));

        });

module.exports = function(app) {
    var request = new XMLHttpRequest();

    request.open('GET', "https://openapi.etsy.com/v2/listings/active.js?keywords=soap&limit=12&includes=Images:1&api_key=a2p83t9puv67kp0dnvsd4yka", true);
    request.onload = function () {
    
      // access JSON data here
      var data = JSON.parse(this.response);

      request({
        ETSY_SECRET: process.env.ETSY_SECRET,
        ETSY_ID: process.env.ETSY_ID
    });

      if (request.status >= 200 && request.status < 400) {
        data.forEach(request => {
          console.log(request);
        });
      } else {
        console.log('error');
      }
    }
    
    request.send();
};



// module.exports = function(app) {
//  app.get("/", function(req, res) {

//      var searchButton = function() {
//             var request = require("request");
            
//             request({
//                 ETSY_SECRET: process.env.ETSY_SECRET,
//                 ETSY_ID: process.env.ETSY_ID
//             });
//         };

//         res.sendFile(path.join(__dirname, "../public/example.html"));
//         searchButton();
//     });
// };
