const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3300',
    user: 'root',
    password: '1234',
    database: 'rpg_api',
});

connection.connect(error => {
    if (error) {
        throw error;
    }
});

module.exports = connection;

