const express = require('express');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const app = express();
/* FireBase Config -- It should be saved in environment variables */
const config = {
    apiKey: "AIzaSyC71XbnQxHPXYEeqdou8Q-eVgFlBq0uk1E",
    authDomain: "crossbarfile.firebaseapp.com",
    databaseURL: "https://crossbarfile.firebaseio.com",
    projectId: "crossbarfile",
    storageBucket: "crossbarfile.appspot.com",
    messagingSenderId: "149186962608"
};
firebase.initializeApp(config);

app.set('views', './views');
app.use('/views/js', express.static(__dirname + '/views/js'));
app.use('/temp', express.static(__dirname + '/temp'));
app.use('/css', express.static(__dirname + '/css'));
app.use(bodyParser.json());                                 // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));         // for parsing application/x-www-form-urlencoded
app.engine('html', require('ejs').renderFile);      // registers the embedded template engine
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
