const express = require('express');
const router = express.Router();
const Post = require('../post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res) => {
  Post.findAll().then((items) => {
    res.render('list.ejs', {items: items})
  });
});

router.get('/add', (req, res) => {
  res.render('add.ejs');
});

router.post('/create', (req, res) => {
  Post.create({
    content: req.body.content
    }).then(() => {
      res.redirect('/list');
      });
    });

/**
 * レコード削除
 * @param {*} query 
 * @param {*} callback 
 */

router.post('/delete/:id', (req, res) => {
  const filter = {
    where: {
      id: req.params.id
    }
  };

  Post.destroy(filter).then(() => {
    res.redirect('/list');
  })
  .catch((err) => {
    res.render('error.ejs');
  });
});

module.exports = router;
