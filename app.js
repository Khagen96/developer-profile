const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static('public'));
const api = require('./server/api');

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});