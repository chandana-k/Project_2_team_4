// require api via request 

var keys = require("../public/keys.js");

    keys.find({  }, function(err, res) {

        if (err) {
            console.log(err);
        }
        console.log(JSON.stringify(res, null, 2));

    });





module.exports = function(app) {
 app.get("/", function(req, res) {
...
     var searchButton = function() {
            var request = require("request");
            
            request ({
                EBAY_SECRET: process.env.ETSY_SECRET,
                EBAY_ID: process.env.EBAY_ID,
                EBAY_DEV_ID: process.env.EBAY_DEV_ID
            });


            params ={
                appid: ("LaceyMcC-WishWidg-SBX-cf8fa4158-0faac1ff"),
                version: ("967"),
                siteid: ("0")
                };

        };

        res.sendFile(path.join(__dirname, "../public/example.html"));
        searchButton();
    });

};
