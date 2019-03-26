/*
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/


/*
 * Import required packages.
 * Packages should be installed with "npm install".
 */
const express = require('express');
const aws = require('aws-sdk');
var rn = require('random-number');
var firebase = require('firebase');
var admin = require("firebase-admin");
var md5 = require('md5');
// Random numbers generator config
var gen = rn.generator({
    min: 100000
    , max: 999999
    , integer: true
})
// Firebase config
var config = {
    apiKey: "AIzaSyC71XbnQxHPXYEeqdou8Q-eVgFlBq0uk1E",
    authDomain: "crossbarfile.firebaseapp.com",
    databaseURL: "https://crossbarfile.firebaseio.com",
    projectId: "crossbarfile",
    storageBucket: "crossbarfile.appspot.com",
    messagingSenderId: "149186962608"
};
firebase.initializeApp(config);
var database = firebase.database()


/*
 * Set-up and run the Express app.
 */
const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000 , console.log('App running !'));
aws.config.region = 'eu-west-2';
/*
 * Load the S3 information from the environment variables.
 */
const S3_BUCKET = process.env.S3_BUCKET;
/*
 * Respond to GET requests to /account.
 * Upon request, render the 'account.html' web page in views/ directory.
 */
app.get('/', (req, res) => res.render('index.html'));
app.get('/account', (req, res) => res.render('account.html'));
app.get('/rec', (req, res) => res.render('receive.html'));

/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get('/sign-s3', (req, res) => {
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
    if(err){
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

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
app.post('/save-details', (req, res) => {
  // TODO: Read POSTed form data and do something useful
});

app.get('/getdata', (req, res) => {
    var md5_code = md5(req.query.code.toString());
    console.log("Kod md5 wpisany: " + md5_code)
    function findLinkInDatabase(md5_code) {
        firebase.database().ref('/crossbarfile/' + md5_code).once('value').then(function (snapshot) {
            var link = snapshot.child('link_address').val();
            console.log(link);
        });
       
    }
    var finalLink = findLinkInDatabase(md5_code);
    res.json({ link: finalLink });
    console.log(findLinkInDatabase(md5_code));

});  

app.post('/returnrandom', (req, res) => {
    var rm = gen();

    console.log(rm.toString());
    res.json({ "random": rm });
    var md5_code = md5(rm.toString());
    console.log("kod md5 wygenerowany: " + md5_code)
    var url = "https://s3.eu-west-2.amazonaws.com/crossfilebar/t.jpg";
    writeUserData(md5_code,url )
    function writeUserData(code , link) {
        firebase.database().ref('crossbarfile/' + code).set({
            link_address:link
                });
    }
    
})
