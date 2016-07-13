var express = require("express")
var moment = require("moment")
var app = express();

app.get('/:date', function (req, res) {
  var param = isNaN(req.params.date) ? req.params.date : req.params.date * 1000
  var date = moment(new Date(param))
  
  // if (isNaN(date))
  
  res.send(JSON.stringify({
    unix: date.format('X'),
    natural: date.format("MMMM D, YYYY")
  }));
  
  // { "unix": 1450137600, "natural": "December 15, 2015" }
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});