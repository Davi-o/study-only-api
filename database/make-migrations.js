const mysql = require('mysql');
const userTable = require('./migrations/create-user-table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3300',
    user: 'root',
    password: '1234',
    database: 'rpg_api',
});

connection.connect((error) => {
    if (error) {
        throw new Error('Error when trying to coneect to the database');
    }
    userTable.createTable(connection);
});





