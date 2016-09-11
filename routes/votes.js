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

router.post('/votes', (req, res) => {
  var vote = new Vote({
    email: req.body.email,
    name: req.body.name,
    vote: req.body.id
  });

  vote.save((err, vote) => {
    if (err) console.error(err);

    console.log(vote.email + ' cast a vote for ' + vote.vote + '.');
    res.sendStatus(200);
  });
});

router.get('/llamas', (req, res) => {
  Vote.distinct('vote', (err, llamas) => {
    if (err) console.error(err);

    res.send(llamas);
  });
});

module.exports = router;
