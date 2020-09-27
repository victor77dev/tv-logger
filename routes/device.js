const express = require('express');
const router = express.Router();
const fs = require('fs'); 

/* GET device log. */
router.get('/read/:serial/:token', function(req, res, next) {
  const {
    serial,
    token,
  } = req.params;

  console.log(serial)

  res.render('device', {
    serial,
    log: 'Logs',
  });
});

module.exports = router;
