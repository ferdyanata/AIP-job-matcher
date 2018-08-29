const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Should this go inside employer? as an array.
//We need to figure out how to link the two schemas in mongoose.

const positionSchema = new Schema({
    positionName: String,
    description: String,
    desiredSkills: [{
        skillName: String,
        //Between 1-4. 1 = beginnner, 4 = expert
        skillLevel: Number
    }],
    creationDate: Date,
    closingDate: Date
});


const Position = mongoose.model('position', positionSchema);

module.exports = Position;