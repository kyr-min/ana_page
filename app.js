const express = require('express')
const app = express()
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Log = require('./model/log');
// const moment = require('moment-timezone');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static('public'))
app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')

//dotenv.config();

// moment.tz.setDefault('Asia/Seoul');

// mongoose.connect('mongodb://localhost/log', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function logger(req, res, next) {
//   if (req.url == '/favicon.ico') {
//     next();
//     return;
//   }
//   const data = {
//     date: moment().format('YYYY-MM-DD HH:mm:ss'),
//     ip: req.headers['x-real-ip'] || req.connection.remoteAddress,
//     encoding: req._readableState.defaultEncoding,
//     url: req.url,
//     os: req.rawHeaders[9],
//     method: req.method,
//   };
//   console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
//   try {
//     await new Log(data).save();
//   } catch (e) {
//     console.log(e);
//   }
//   next();
// }
let title = 'AnA'

app.get('/', (req, res) => {
	title = 'AnA'
	res.render('main', { title })
})

app.get('/about', (req, res) => {
	title = 'About'
	res.render('about', { title })
})

app.get('/curriculum', (req, res) => {
	title = 'Curriculum'
	res.render('curriculum', { title })
})

app.get('/members', (req, res) => {
	title = 'Members'
	res.render('members', { title })
})

app.get('/imsorry', (req, res) => {
	res.render('imsorry.ejs')
})

// app.post('/android', async (req, res) => {
//   const limit = req.body.limit || 20;
//   console.log('here');
//   if (req.body.password === process.env.ANDROID_PASSWORD) {
//     const data = {
//       data: await Log.find().sort({ date: -1 }).limit(limit),
//     };
//     res.json(data);
//   }
// });

app.listen(3000, () => {
	console.log('Server Running...')
})
