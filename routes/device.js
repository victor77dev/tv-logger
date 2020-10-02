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

/* POST report device log. */
router.post('/report/:serial/:token', function(req, res, next) {
  const {
    serial,
    token,
  } = req.params;

  console.log(serial, token)

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(200);
});

module.exports = router;
