var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yuukimaru',
  password: '280Qi4Xx',
  database: 'purchase_list'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM lists',
    (error, results) => {
      res.render('list.ejs', {lists: results});     
    }
  );
});

router.get('/add', (req, res) => {
  res.render('add.ejs');
})

router.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO lists(name) VALUE(?)',
    [req.body.itemName],
    (error, results) => {
      res.redirect('/list');
    }
  );
})

module.exports = router;
