const encryptor = require('../util/encryption/encrypt');
const UserModel = require('../models/UserModel')
const {checkForEmptyMandatoryField} = require('../util/validation/validator');

module.exports = {
    async registerNewUser(request, response) {
        try {
            await this.validateRequest(request);

            const user = new UserModel(
                null,
                request.body.name,
                request.body.mail,
                request.body.phone_number,
                request.body.password
            );

            user.insertUser();

            return response.json({id: user.getId()});
        } catch (exception) {
            return response.status(400).json({error: exception});
        }
    },
    async validateRequest(request) {
        checkForEmptyMandatoryField(Object.values(request));
        request.body.password = await encryptor.encryptPassword(request.body.password);
    }
}