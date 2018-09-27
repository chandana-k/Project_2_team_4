// require api via request 

var keys = require("../public/keys.js");

    keys.find({  }, function(err, res) {

        if (err) {
            console.log(err);
        }
        console.log(JSON.stringify(res, null, 2));

    });



// ETSY OAuth


module.exports = function(app) {
 app.get("/", function(req, res) {
...
     var searchButton = function() {
            var request = require("request");
            
            request ({
                ETSY_ID: process.env.ETSY_ID,
                ETSY_SECRET: process.env.ETSY_SECRET
            });
        };

        res.sendFile(path.join(__dirname, "../public/example.html"));
    });
};
