const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
  axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.SECRET_API_KEY,
      q: req.body,
      limit: 5
    }
  })
  .then(giphyResponse => {
    res.send(giphyResponse.data.data);
  })
  .catch(err => {
    console.log('giphy request failed', err);
    res.sendStatus(500)
  });
});

module.exports = router;