const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * construct talent model
 */
const talentSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio : String,
    skills: [{
        skillName: String,
        skillLevel: Number
    }]
});

/**
 * store talent schema into another model
 */
const Talent = mongoose.model('talent', talentSchema);

module.exports = Talent;