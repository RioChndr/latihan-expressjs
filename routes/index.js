var express = require('express');
var router = express.Router();
var db = require('../db_config.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "select * from users";
  var hasil_data = [];
  db.query(query, function(error, hasil){
    hasil_data = hasil;
    res.render('index', { title: 'Express', data : hasil_data });
  });
});

router.post('/kirim_data', function(req, res, next){
  var nama = req.body.nama;
  console.log(nama);
  var query = "insert into users (nama) values ('"+nama+"')";
  db.query(query, function(error, hasil){
    if(error) throw error;
    res.redirect("/");
  })
})



module.exports = router;
