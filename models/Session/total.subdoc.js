const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const totalSchema =  new Schema({
    gamerTag: String,
    team: String,
    total: Number
})


module.exports = totalSchema;