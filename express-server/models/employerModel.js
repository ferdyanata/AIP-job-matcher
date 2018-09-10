const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * construct an employer model
 */
const employerSchema = new Schema({
    companyName: String,
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
});

/**
 * store employer schema into another model
 */
const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;