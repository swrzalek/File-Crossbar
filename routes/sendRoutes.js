const express = require('express')
const router = express.Router()
const aws = require('aws-sdk');
var md5 = require('md5');
const S3_BUCKET = process.env.S3_BUCKET;
var rn = require('random-number');
var multer  = require('multer');
var firebase = require('firebase');
var request = require('request');
const fs = require('fs');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)


router.get('/', (req, res) => res.render('send.html'));
/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
router.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        res.write(JSON.stringify(returnData));
        res.end();
    });
});

router.post('/getCode', (req, res) => {
    // Random numbers generator config
    const gen = rn.generator({
        min: 100000
        , max: 999999
        , integer: true
    })
    const rm = gen();
    console.log(rm.toString());
    res.json({ "random": rm });
    const md5_code = md5(rm.toString());
    const link = req.body.link;
    console.log("kod md5 wygenerowany: " + md5_code)
    // handle sent data from frontend !!!LINK!!!;

    function writeUserData(code , link) {
        firebase.database().ref('crossbarfile/' + code).set({
            link_address:link
        });
    }
    writeUserData(md5_code, link);
})






module.exports = router
