const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});

app.get('/socials', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/socials.html'));
});

app.use(
  '/storage',
  express.static('public/storage'),
  serveIndex('public/storage', { icons: true, stylesheet: 'public/css/storage.css', template: 'pages/storage.html' })
);

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/blog.html'));
});

app.listen(3000);
