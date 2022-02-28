const mongoose = require('mongoose');

const works_schema = new mongoose.Schema(
    {
        work_title: {
            type: String
        },
        work_info: {
            type: String
        },
        is_active: {
            type: Boolean
        }
    }
);

const works = mongoose.model('works', works_schema);
module.exports = works;