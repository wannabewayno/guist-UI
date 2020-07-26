const { Game, Session, User } = require('../models');



module.exports = {
    getSession(req,res){

    },
    getAllSessions(req,res){

    },
    createSession(req,res){
        console.log('this is being hit');
        console.log(req.body);
        Session.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(422).json(error.response))
    }
}