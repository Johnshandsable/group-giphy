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
      console.log('inside /api/favorite - success');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('an error occurred inside /api/favorite', err);
      res.sendStatus(500);
    });
});

// returns all favorite images and associated categories
router.get('/all', (req, res) => {
  console.log('SERVER - GET inside /api/favorite/all');
  const sqlText = `SELECT "image_url", "name"
    FROM "favorite_gifs" 
    JOIN "favorite_gifs_category" ON "favorite_gifs".id = "favorite_gifs_category".favorite_gif_id
    JOIN "category" ON "favorite_gifs_category".category_id = "category".id;`;
  pool
    .query(sqlText)
    .then((dbRes) => {
      console.log('inside /api/favorite/all - success');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('inside /api/favorite/all - an error occurred', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('SERVER - POST inside /api/favorite');
  const newImageURL = req.body.image_url;
  console.log('image.url: ', req.body.image_url);
  const sqlText = `INSERT INTO "favorite_gifs" 
                  ("image_url") 
                  VALUES ($1);`;

  pool
    .query(sqlText, [newImageURL])
    .then((dbRes) => {
      console.log('SERVER - POST - successful');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('SERVER - POST - an error occurred', err);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log('req body', req.body);
  const queryArgs = [req.body.id, req.body.category]
  const sqlQuery = `INSERT INTO "favorite_gifs_category" ("favorite_gif_id", "category_id")
  VALUES ($1, $2);`;
  pool
    .query(sqlQuery, queryArgs)
    .then(dbRes => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('error in put', err);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  console.log('SERVER - DELETE inside /api/favorite');
  const idToDelete = req.params.id;
  const sqlText = `DELETE FROM "favorite_gifs_category" WHERE "favorite_gif_id"=$1;`;
  pool
    .query(sqlText, [idToDelete])
    .then((dbRes) => {
      console.log('SERVER - DELETE - successful');
      pool.query(`DELETE FROM "favorite_gifs" WHERE "id"=$1;`, [idToDelete])
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log('error deleting from "favorite_gifs"', err);
      })
    })
    .catch((err) => {
      console.error('SERVER - DELETE inside /api/favorite', err);
    });
});

module.exports = router;
