module.exports = {
    async createTable(connection) {
        const sql = "create table if not exists users \n"+
            "(id int not null auto_increment,"+
            "name varchar(60) not null,"+
            "mail varchar(60) not null,"+
            "phone_number varchar(15) not null,"+
            "password varchar(255) not null,"+
            "primary key(id))";

        await this.runSql(sql, connection).catch(error => {
            console.log(error)
        });
    },

    async dropTable(connection){
        const sql = "drop table if exists users cascade;";

        await this.runSql(sql, connection).catch(error => {
            console.log(error)
        });
    },

    async runSql(sql, connection) {
        await connection.query(sql, (error, results, fields) => {
            if (error) {
                throw error;
            }
        })
    }
}