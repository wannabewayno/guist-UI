const faker = require('faker');
const randomTeam = require('./lib/randomTeam');
const randomNumber = require('./lib/randomNumber');

function createScore() {
    const kills = randomNumber([0,30])
    const assists = randomNumber([0,5])
    const score = kills*100 + assists*10;
    let deaths;
    if(    kills<=5)   deaths = randomNumber([10,15]);
    if(5 <=kills && kills < 5)  deaths = randomNumber([5,10]);
    if(5 <=kills && kills < 10) deaths = randomNumber([2,8]);
    if(10<=kills && kills < 15) deaths = randomNumber([1,5]);
    if(15<=kills && kills < 20) deaths = randomNumber([1,4]);
    if(20<=kills && kills < 25) deaths = randomNumber([0,2]);
    if(    kills >= 25) deaths = randomNumber([0,2]);  

    return {
        gamerTag: faker.internet.userName(),
        team: randomTeam(),
        stats: {
            kills,
            deaths,
            score,
            assists,
        }
    }
}

module.exports = function generateScores(numberOfPlayers){
    const scores = [];
    for (let index = 0; index < numberOfPlayers; index++) {
        scores.push(createScore())
    }
    return scores;
}