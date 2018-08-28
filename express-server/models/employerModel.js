const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * construct an employer model
 */
const employerSchema = new Schema({
    companyName: String,
    firstName: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    phone: {
        type: String,
        required: [true, 'Please enter your number']
    }
});

/**
 * store employer schema into another model
 */
const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;