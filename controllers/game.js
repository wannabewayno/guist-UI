const { Game } = require('../models');

module.exports = {
    createGame(req,res){
        console.log(req.body);
        Game.create
    },
    addGame(req,res){
        
    }
}