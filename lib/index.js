const express = require('express')
const path = require('path');

const app = express()

app.use('/', express.static(path.join(__dirname, '../lib')));
app.use('/assets', express.static(path.join(__dirname, '../lib')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
