const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const talentId = mongoose.model('talentId', talentId);

/**
 * construct an employer model
 */
const employerSchema = new Schema({
    employerId: String,
    email: String,
    password: String,
    companyName: {
        type: String,
        required: true
    }
});

/**
 * store employer schema into another model
 */
const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;