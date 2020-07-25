const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require('../Game');
const totalSubDoc = require('./total.subdoc');

// Schema
// ==============================================================================

const sessionSchema = new Schema({
    name:{ type:String, required:true },
    games:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Game' } ],
    ranks: {
        type: Map,
        of: [ totalSubDoc ]
    }
},{
    timestamps:true
});


// everytime we add a Game, we re-calculate the Rank
// we need to add the last game's scores to the total
sessionSchema.pre(['update'],async function(next){
    const [ lastGameID ] = this.games.slice(-1);
    const lastGame = await Game.findById(lastGameID);

    lastGame.scores.forEach(score => {
       const { stats } = score
        for (stat in stats){
            if(!ranks[stat]) {
                const gamersRankedStat = this.ranks[stat].find( total => total.gamerTag === score.gamerTag )
                gamersRankedStat.team = score.team;
                gamersRankedStat.total = stats[stat]
            } else {
                const { gamerTag, team } = score;
                ranks[stat].push({
                    gamerTag,
                    team,
                    total:stats[stat]
                });
            }
        }
    });

    next()
})

// then sort the ranks again
sessionSchema.pre(['update'], function(next){
    for(rank in ranks){
        ranks[rank].sort( (a,b) => a.total - b.total)
    }

    next();
})

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;