const express = require('express');
const request = require('request');

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));