const faker = require('faker');
const randomTeam = require('./randomTeam');

module.exports = () => {
    const players = [];
    for (let iterator = 0; iterator < 18; iterator++) {
        players.push({
            gamertag: faker.internet.userName(),
            team: randomTeam(),
        })
    }
    return players;
}