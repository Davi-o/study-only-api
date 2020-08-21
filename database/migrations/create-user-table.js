module.exports = {
    createTable(connection) {
        const sql = "create table if not exists users \n"+
            "(id int not null auto_increment,"+
            "name varchar(50) not null,"+
            "phone_number varchar(15) not null,"+
            "password varchar(50) not null,"+
            "primary key(id))";

        connection.query(sql, (error, results, fields) => {
            if (error) {
                throw new Error('Error when creating table');
            }
        })
    }
}