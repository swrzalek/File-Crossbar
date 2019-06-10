const express = require('express');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const app = express();
/* FireBase Config -- It should be saved in environment variables */
const config = {
    apiKey:  process.env.FB_APIKEY,
    authDomain:  process.env.FB_AUTHDOMAIN,
    databaseURL:  process.env.FB_DATABASEURL,
    projectId:  process.env.FB_PROJECTID,
    storageBucket:  process.env.FB_STORAGEBUCKET,
    messagingSenderId:  process.env.FB_SENDERID
};
firebase.initializeApp(config);
app.set('views', './views');
app.use('/views/js', express.static(__dirname + '/views/js'));
app.use('/temp', express.static(__dirname + '/temp'));
app.use('/css', express.static(__dirname + '/css'));
app.use(bodyParser.json());                                 // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));         // for parsing application/x-www-form-urlencoded
app.engine('html', require('ejs').renderFile);      // registers the embedded template engine
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* Routes */
const send = require('./routes/sendRoutes')
const receive = require('./routes/receiveRoutes')
app.use('/send', send)
app.use('/receive', receive)

/* Homepage */
app.get("/", (req, res) => {
    res.render("home.html")
})

app.listen(process.env.PORT || 3000, console.log('Server Started at: ', Date.now()));
aws.config.region = 'eu-west-2';
