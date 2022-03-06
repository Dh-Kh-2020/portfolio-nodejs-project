const DB = require('../DB/connection');

/**************** Custom Validation *****************/
var workTitleValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 30],
        message: 'Work title have to be >= 3 and <= 30 of characters'
    })
];
/*************** /Custom Validation *****************/

/**************** Previous Works Schema ****************/
const works = new DB.Schema({
    title: {
        type: String,
        required: true,
        validate: workTitleValidator
    },
    image: {
        type: String,
        required: true,
    },

    description: {
        type: String
    },

    liveDemo: {
        type: String
    },

    is_active: Boolean
});

module.exports = DB.model("works", works);