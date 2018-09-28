const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Should this go inside employer? as an array.
//We need to figure out how to link the two schemas in mongoose.

const positionSchema = new Schema({
    positionName: String,
    description: String,
    desiredSkills: [],
    creationDate: Date,
    closingDate: Date,
    employerId: String
});


const Position = mongoose.model('position', positionSchema);

module.exports = Position;