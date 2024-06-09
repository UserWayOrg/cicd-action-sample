const express = require('express');
const app = express();
app.use(express.static(__dirname + '/src'));
const port = 1342;
app.listen(port);
console.log('server on http://localhost:' + port);
