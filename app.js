const express = require('express');
const app = express();
const fs = require('fs');
const dotenv = require('dotenv');

app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

dotenv.config();

app.use((req, res, next) => {
  console.log(req.url);
  if (req.url == '/favicon.ico') {
    next();
    return;
  }
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const data =
    `${Date()}\nip : ${ip}, Encoding : ${
      req._readableState.defaultEncoding
    }, url : ${req.url} \n` +
    `OS, Web : ${req.rawHeaders[9]}\n` +
    `method : ${req.method}\n`;

  fs.appendFileSync(__dirname + '/log/serverLog.txt', data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  next();
});

app.get('/', (req, res) => {
  res.render('main.ejs');
});

app.get('/imsorry', (req, res) => {
  res.render('imsorry.ejs');
});

app.post('/android', (req, res) => {
  if (req.body.password === process.env.ANDROID_PASSWORD) {
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Server Running...');
});
