// require api via request 

var keys = require("../public/keys.js");

    keys.find({  }, function(err, res) {

        if (err) {
            console.log(err);
        }
        console.log(JSON.stringify(res, null, 2));

    });



// ETSY OAuth

// var $req_token, ETSY_ID;

// $req_token = ETSY_ID.getRequestToken();

// print ( $req_token [ "login_URL" ]+ "\n");

// var $request_token;

// $request_token = $_GET("oauth_token");

// $request_token();




// var ClientOAuth2 = require('client-oauth2')

 
// var etsyAuth = new ClientOAuth2({
//   ETSY_ID: 'a2p83t9puv67kp0dnvsd4yka',
//   ETSY_SECRET: 'pynunvtzov',
//   accessTokenUri: 'https://etsy.com/login/oauth/access_token',
//   authorizationUri: 'https://etsy.com/login/oauth/authorize',
//   redirectUri: 'http://etsy.com/callback',
//   scopes: ['listings_w', 'listings_d']
// });

// etsyAuth();




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
