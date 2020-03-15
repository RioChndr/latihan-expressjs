var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database:'db_openclass'
});

db.connect(function(err){
    if(err) throw err;
    console.log('Tersambung !');
});

module.exports = db;