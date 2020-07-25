const { Game, Session, User } = require('../models');



module.exports = {
    getSession(req,res){

    },
    getAllSessions(req,res){

    },
    createSession(req,res){
        console.log('this is being hit');
        console.log(req.body);
        const session = new Session(req.body);
        session.save()
        .then(response => res.json(response))
        .catch(error => res.status(422).json(error.response))
    }
}