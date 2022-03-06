const DB = require('../DB/connection');

/**************** Custom Validation *****************/
var skillTitleValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 30],
        message: 'Skill title have to be >= 3 and <= 30 of characters'
    })
];

/*************** /Custom Validation *****************/


/**************** Skills Schema ****************/
const skills = new DB.Schema({
    title: {
        type: String,
        required: true,
        validate: skillTitleValidator
    },
    precentage: {
        type: Number,
        required: true,
    },

    is_active: Boolean
});

module.exports = DB.model("skills", skills);