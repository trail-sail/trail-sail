
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());


app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});