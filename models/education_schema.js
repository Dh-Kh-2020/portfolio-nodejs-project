const mongoose = require('mongoose');

const education_schema = new mongoose.Schema(
    {
        education: {
            type: String
        }
    }
);

const education = mongoose.model('education', education_schema);
module.exports = education;