const DB = require('../DB/connection');

/**************** Custom Validation *****************/
var serviceTitleValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 30],
        message: 'Service title have to be >= 3 and <= 30 of characters'
    })
];
/*************** /Custom Validation *****************/

/**************** Services Schema ****************/
const services = new DB.Schema({
    title: {
        type: String,
        required: true,
        validate: serviceTitleValidator
    },
    image: {
        type: String,
        required: true,
    },

    description: {
        type: String
    },

    is_active: Boolean
});


module.exports = DB.model("services", services);