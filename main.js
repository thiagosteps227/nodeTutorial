
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.post('/', function(req,res) {
    console.log('Got a post request for the homepage');
    res.send('Hello Post');
})

app.delete('/', function(req,res) {
    console.log('Got a delete request for the homepage');
    res.send('Hello delete');
})

app.get('/list_user', function(req,res) {
    console.log('Got a GET request for /list_user');
    res.send('Page Listing');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})