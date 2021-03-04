const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('SERVER - GET inside /api/favorite');
  const sqlText = 'SELECT * FROM "favorite_gifs"';
  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('an error occurred inside /api/favorite', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('SERVER - POST inside /api/favorite');
  const newImageURL = req.body.image_url;
  console.log(req.body.image_url);
  const sqlText = 'INSERT INTO "favorite_gifs" ("image_url") VALUES ($1)';
  pool
    .query(sqlText, [newImageURL])
    .then((dbRes) => {
      console.table(dbRes);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('SERVER - POST - an error occurred', err);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
