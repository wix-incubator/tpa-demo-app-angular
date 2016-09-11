var express = require('express');
var app = express();

app.use(express.static('.'));
console.log('Listening on port 9000');
app.listen(9000);
