const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let feedback = req.body;
  
    // SQL query text to add the feedback oject to the database
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;

    // Sanitzed inputs
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