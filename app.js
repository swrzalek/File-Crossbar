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
var md5 = require('md5');
var bodyParser = require('body-parser');

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
/*
 * Set-up and run the Express app.
 */
const app = express();
app.set('views', './views');
app.use('/views/js', express.static(__dirname + '/views/js'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/css', express.static(__dirname + '/css'));

var send = require('./routes/sendRoutes')
app.use('/send', send)
var receive = require('./routes/receiveRoutes')
app.use('/receive', receive)

app.get("/", (req, res) => {
    res.render("home.html")
})

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
app.get('/getdata', (req, res) => {
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
app.post('/returnrandom', (req, res) => {
    var rm = gen();

    console.log(rm.toString());
    res.json({ "random": rm });
    var md5_code = md5(rm.toString());
    var link = req.body.link;
    console.log("kod md5 wygenerowany: " + md5_code)
   // handle sent data from frontend !!!LINK!!!;
    
    function writeUserData(code , link) {
        firebase.database().ref('crossbarfile/' + code).set({
            link_address:link
                });
    }
    writeUserData(md5_code, link);
})

app.listen(process.env.PORT || 3000, console.log('App running !'));
aws.config.region = 'eu-west-2';
