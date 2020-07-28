const faker = require('faker');
const randomTeam = require('./randomTeam');

module.exports = () => {
    const players = [];
    for (let iterator = 0; iterator < 18; iterator++) {
        // need a gamertag under 16 charaacters
        let gamertag = faker.internet.userName();
        while(gamertag.length > 15){
            gamertag = faker.internet.userName();
        }

        players.push({
            gamertag,
            team: randomTeam(),
        })
    }
    return players;
}