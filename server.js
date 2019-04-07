var express = require('express');
var app = express();
var cors = require ('cors');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});



































