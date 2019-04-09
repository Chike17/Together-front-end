var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
const multer = require('multer');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));



let storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
  cb(null, Date.now() + '-' + file.originalname)
  }
  });
const upload = multer({ storage });


app.post('/upload', upload.single('image'), (req, res) => {
if (req.file)
res.json({
imageUrl: `public/images/uploads/${req.file.filename}`
});
else 
res.status("409").json("No Files to Upload.");
});



app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});



























