const userTable = require('./create-user-table');
const connection = require('../connection');

userTable.dropTable(connection).catch(error => {
    throw error;
}).then(() => {
    console.log('successfully dropped table users');
});

userTable.createTable(connection).catch(error => {
    throw error;
}).then(() => {
    console.log('successfully created table users');
});





