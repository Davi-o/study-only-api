const crypto = require('crypto');

module.exports = {
    async encryptPassword(secret){
        return this.saltPassword(secret);
    },

    getRandomizedString(length){
        return crypto.randomBytes(Math.ceil(length/2)).
        toString('hex').
        slice(0, length);
    },

    hashPassword(password, salt){
        let hash = crypto.createHash('sha512', salt);
        hash.update(password);
        return hash.digest('hex');
    },

    saltPassword(password) {
        let salt = this.getRandomizedString(20);
        return this.hashPassword(password, salt);
    }
}