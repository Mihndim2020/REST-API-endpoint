var express = require('express');
var router = express.Router();

const staticMessage = {
  "message": "Automate all the things!",
  "timestamp": Date.now()
};

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(staticMessage);
});

module.exports = router;
