const DB = require('../DB/connection');

/**************** Custom Validation *****************/
var experienceTitleValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 30],
        message: 'Experience title have to be >= 3 and <= 30 of characters'
    })
];
/*************** /Custom Validation *****************/

/**************** Experiences Schema ****************/
const experiences = new DB.Schema({
    title: {
        type: String,
        required: true,
        validate: experienceTitleValidator
    },
    precentage: {
        type: Number,
        required: true,
    },

    is_active: Boolean
});

module.exports = DB.model("experiences", experiences);