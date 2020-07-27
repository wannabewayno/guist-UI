const { Game, Session, User } = require('../models');



module.exports = {
    getSession(req,res){
        console.log(req.params);
        const { sessionPhrase } = req.params
        console.log(sessionPhrase);
        Session.find({ sessionPhrase })
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(422).json(error);
        })
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