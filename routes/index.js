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

/* Proses pengiriman data ke database */
router.post('/kirim_data', function(req, res, next){
  var nama = req.body.nama; //ambil data yg di input
  console.log(nama);
  var query = "insert into users (nama) values ('"+nama+"')"; //query untuk memasukkan data
  db.query(query, function(error, hasil){
    if(error) throw error;

    //pindah ke halaman home
    res.redirect("/");
  })
})

/* Hapus data */
router.get('/hapus/:userId', function(req, res, next){
  var userId = req.param('userId');
  var query = `delete from users where id = '${userId}'`;
  db.query(query, function(error, hasil){
    if(error) throw error;
    res.redirect('/');
  })
})


module.exports = router;
