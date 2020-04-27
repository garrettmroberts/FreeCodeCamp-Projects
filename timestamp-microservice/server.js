// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/api/timestamp", (req, res) => {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();
  res.json({
    unix: unix,
    utc: utc
  });
})

app.get("/api/timestamp/:date_string?", (req, res) => {
  const date_string = req.params.date_string;
  const date = new Date(date_string);
  if (isNaN(date)) {
    res.json({error: "Invalid Date"});
  };

  const unix = date.getTime();
  const utc = date.toUTCString();
  res.json({
    unix: unix,
    utc: utc
  });
});


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});





// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});