const userTable = require('./migrations/create-user-table');
const connection = require('./connection');

connection.connect(error => {
    if (error) {
        throw new Error('Error when trying to connect to the database');
    }

    userTable.createTable(connection);
});





