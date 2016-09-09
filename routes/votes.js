var express = require('express');
var router = express.Router();
var Vote = require('../models/vote');
var mongoose = require('mongoose');

router.get('/votes', (req, res) => {
  Vote.find({}, (err, votes) => {
    Vote.aggregate(
      { $group:
        { _id: '$vote', count: { $sum: 1 } }
      },
      (err, votes) => {
        if (err) console.error(err);
        res.setHeader('Content-Type', 'application/json');
        res.json(votes);
      }
    )
  });
});

module.exports = router;
