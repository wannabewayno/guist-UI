const { Session, Game } = require('../models'); // require models
const generatePlayers = require('./lib/generatePlayers.seed');
const generateScore = require('./lib/generateScore.seed');
const randomNumber = require('../lib/randomNumber');

require('dotenv').config(); // load our MONGODB_URI
require('../config/mongoConnect') // connect to mongo atlas
// Success, a connection has been made
.then(async () => {
    console.log('Success: Connection to mongo Atlas has been established');
    await Session.deleteMany({})
    await Game.deleteMany({})

    // Now we set up one giant for loop and seed some data
    for (let index = 0; index < 12; index++) {
        console.log('START OF LOOP');
        console.log(['CREATING NEW SESSION']);
        //create a session
        const session = new Session({ name:`Session: ${index}` });
        const sessionID = session._id;
        console.log('CURRENT SESSION:',session);

        // create players and teams for this session
        const players = generatePlayers();
        console.log('Players in this session:',players);

        // generate a random number of games from 6 - 24
        const numberOfGames = randomNumber([6,18]);
        console.log('NUMBER OF GAMES:',numberOfGames);

        for (let iterator = 0; iterator < numberOfGames; iterator++) {
            // generate scores for a game
            const scores = players.map(player => {
                const stats = generateScore()
                return {...player, stats};
            })

            // create a new game
            const createdGame = await Game.create({sessionID,scores});
            console.log('CREATED GAME:',createdGame);

            // get the newly created game's ID
            const { _id } = createdGame;

            // add this to our session
            await session.games.push(_id);

            //save the session
            await session.save();
        }
        console.log(['END OF SESSION']);
    }
    // finish seeding
    process.exit();
})
// There was an error connecting to Mongo Atlas
.catch(error => console.log(error)) 

