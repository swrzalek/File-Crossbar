const express = require('express')
const md5 = require('md5');
const firebase = require('firebase');
const router = express.Router()
const cors = require('cors');


const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}
// Enable preflight requests for all routes
router.options('*', cors(corsOptions));
router.get('/', (req, res) =>
    res.render('receive.html'
    ));
router.get('/getImageURL', cors(corsOptions), (req, res) => {
    var md5_code = md5(req.query.code.toString());
    console.log("Kod md5 wpisany: " + md5_code)
    function findLinkInDatabase(md5_code) {
        firebase.database().ref('/crossbarfile/' + md5_code).once('value').then(function (snapshot) {
            var finalLink = snapshot.child('link_address').val();
            res.json({ link: finalLink });
        });
    }
    findLinkInDatabase(md5_code);
    });
module.exports = router
