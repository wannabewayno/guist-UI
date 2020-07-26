const faker = require('faker');
const randomTeam = require('./lib/randomteam');
const randomNumber = require('./lib/randomNumber');

function createScore() {
    const kills = randomNumber([0,30])
    const assists = randomNumber([0,5])
    const score = kills*100 + assists*10;
    let deaths
    switch(kills){
        case(kills > 5): deaths = randomNumber([5,10])
        case(kills > 10): deaths = randomNumber([2,8])
        case(kills > 15): deaths = randomNumber([1,5])
        case(kills > 20): deaths = randomNumber([0,3])
        case(kills > 25): deaths = randomNumber([0,2])
        default: deaths = randomNumber([10,15])
    }

    return {
        gamerTag: faker.internet.avatar(),
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
}