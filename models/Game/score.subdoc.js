const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    gamerTag: String,
    team: String,
    stats:{
        kills: Number,
        deaths: Number,
        score: Number,
        assists: Number,
    }
})

scoreSchema.pre(['save','create'], function(next){
    const { stats:{ kills, deaths } } = this;
    this.stats.KDRatio = kills/deaths;
    
    next()
});


