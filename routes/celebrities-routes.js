const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/new', (req, res, next) => {
    res.render("celebrities/new-celebrity")
  });

  router.post('/add', (req, res, next) => {
    const { name, occupation, catchphrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchphrase })
    newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities')
    })
    .catch((error) => {
        res.render('celebrities/new-celebrity')
    })
  });

  module.exports = router;