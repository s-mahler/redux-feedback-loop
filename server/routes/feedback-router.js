const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`feedback`, feedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.Feeling, feedback.Understanding, feedback.Support, feedback.Comments])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Feedback error`, error);
        res.sendStatus(500);
      });
  });

  module.exports = router;