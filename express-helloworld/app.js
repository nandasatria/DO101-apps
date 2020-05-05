var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World Version 3!\n');
});


app.get('/helo', function (req, res) {
  res.send('Hello Gaes This is Version 3 !\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

