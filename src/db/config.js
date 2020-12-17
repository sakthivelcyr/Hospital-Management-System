const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mchms'
});

connection.connect(function(err, result) {
    if (err)
        console.log(err);
    else
        console.log("DB Connected successfully");
});

module.exports = connection;