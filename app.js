const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  console.log(ip);
  next();
});

app.get('/', (req, res) => {
  res.render('main.ejs');
});

app.get('/imsorry', (req, res) => {
  res.render('imsorry.ejs');
});

app.listen(3000, () => {
  console.log('Server Running...');
});
