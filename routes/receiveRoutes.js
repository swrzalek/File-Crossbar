const express = require('express')
const md5 = require('md5');
const firebase = require('firebase');
const router = express.Router()
const cors = require('cors');






// Enable preflight requests for all routes
router.options('*', cors());
router.get('/', (req, res) =>
    res.render('receive.html'
    ));
router.get('/getImageURL', cors(), (req, res) => {
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
