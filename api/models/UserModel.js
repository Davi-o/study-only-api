const connection = require('../database/connection');

module.exports = class UserModel {
    constructor(id, name, mail, password) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMail(){
        return this.mail;
    }

    insertUser(){
        const sql = "insert into users(id, name, mail, phone_number, password) values (null, ?, ?, ?, ?)";

        const fields = this.formatFieldsToQuery();
        console.log(fields)
        connection.query(sql, fields,
            (error, result) => {
                if (error) {
                    throw new error;
                }

                this.id = result.insertId;
            }
        );
    }

    formatFieldsToQuery() {
        return Object.values(this);
    }
}