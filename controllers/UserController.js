const connection = require('../database/connection');
const encryptor = require('../util/encryption/encrypt');

module.exports = {
    async registerNewUser(request, response) {
        const sql = "insert into users(id, name, phone_number, password) values (null, ?, ?, ?)";
        const hashedPassword = await encryptor.encryptPassword(request.body.password);

        const userData = [
            request.body.name,
            request.body.phone_number,
            hashedPassword
        ];

        connection.query(sql, userData,
            (error, result) => {
                if (! error) {
                    return response.json({id: result.insertId});
                }
                connection.end();
                return response.send(error);
            }
        );
    }
}