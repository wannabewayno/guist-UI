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
        of: [ {type: totalSubDoc } ]
    }
},{
    timestamps:true
});

// everytime we add a Game, we re-calculate the Rank
// we need to add the last game's scores to the total
sessionSchema.pre('save', async function(next){
    if(this.games.length > 0) {
        const [ lastGameID ] = this.games.slice(-1);
        const lastGame = await Game.findById(lastGameID);

        lastGame.scores.forEach(score => {
            const { stats } = score
            if(!this.ranks){
                this.ranks = {}
            }
            console.log('Current Stats',stats);
            for (const stat in stats) {

                if(!this.ranks.has(stat)){
                    this.ranks.set(stat,[]);
                }
                
                const { gamerTag, team } = score;
                const total = stats[stat];

                const rankArray = this.ranks.get(stat)
                if(rankArray.some(rank => rank.gamerTag === gamerTag)){
                    rankArray = rankArray.map( rank => {
                        if(rank.gamerTag === score.gamerTag){
                            rank.team = team;
                            rank.total = total;
                            return rank;
                        } 
                    });
                } else {
                    rankArray.push({ gamerTag, team, total });
                }
                this.ranks.set(stat,rankArray);
            }
        });
    }
    next()
})

// We can create a Kill/Death ratio Rank from the kills and deaths rank;
sessionSchema.pre('save', function(next){
    if(this.games.length > 0){
        if (this.ranks.has('kills') && this.ranks.has('deaths') && this.games.length > 0) {
            // get the kills and deaths rank (contains totals for every player)
            const rankedKills = this.ranks.get('kills');
            const rankedDeaths = this.ranks.get('deaths');
            
            const KDRatios = rankedKills.map(({gamerTag, total, team}) => {
                const kills = total;
                const deaths = rankedDeaths.find( player => gamerTag === player.gamerTag ).total
                
                let KDRatio;
                if(deaths === 0) KDRatio = kills
                else KDRatio = Math.round((kills/deaths)*100)/100

                return {
                    gamerTag,
                    team,
                    total:KDRatio
                }
            })
            // save this into our schema
            // no need to sort it, sorting will happen in the next pre-hook
            this.ranks.set('KDRatios',KDRatios);
        }
    }
    next()
})

// then sort the ranks to actually make them a rank
sessionSchema.pre('save', function(next){
    if(this.games.length > 0) {
        for(const [dataType,dataArray] of this.ranks){
            const rank = dataArray.sort( (a,b) => b.total - a.total )
            this.ranks.set(dataType,rank)
        }
    }
    next();
})


const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;