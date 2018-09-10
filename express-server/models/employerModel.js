const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * construct an employer model
 */
const employerSchema = new Schema({
    firstName: String,
    lastName:  String,
    email: String,
    phone: Number,
    jobTitle: String,
    companyName: String,
});

/**
 * store employer schema into another model
 */
const Employer = mongoose.model('employer', employerSchema);

module.exports = Employer;