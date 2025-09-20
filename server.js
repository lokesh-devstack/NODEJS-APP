//import express module
const express = require('express')
//a variable that is not chanageble is called a "const"
//expres ia a top level function that lets you call whatever is inside the express library. 

//create express application
const app = express()
//enable cors for all origins 

app.use('/', express.static(__dirname + '/'))

function bla() {
    console.log("app listening on port 3000!")
}

app.listen(3000, bla);

//frondend code needs to be run by browser
// backend code needs to be run by a application that understands it






