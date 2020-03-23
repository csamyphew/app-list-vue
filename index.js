const express = require('express');
const request = require('request');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/app/free', (req, res) => {
  request({ url: 'https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/100/explicit.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/app/gross', (req, res) => {
  request({ url: 'https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/app/detail/:id', (req, res) => {
  request({ url: 'https://itunes.apple.com/hk/lookup?id=' + req.params.id },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/client/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));