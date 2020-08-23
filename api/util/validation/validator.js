module.exports = {
    checkForEmptyMandatoryField(fields){
        fields.forEach(field => {
            if (! field) {
                throw new Error('Empty mandatory field');
            }
        });
    }
}