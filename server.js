var express = require('express');
var app = express();
app.get('/hello', (req, res) =>
res.send('Hi World!'));
app.listen(4000);
