const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Should this go inside positionModel? as an array
//We need to figure out how to link the two schemas in mongoose.

const applicationSchema = new Schema({
    talentId: String,
    positionId: String,
    messageToEmployer: String,
    apllicationDate: Date
});

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;