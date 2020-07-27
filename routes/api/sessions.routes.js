const router = require("express").Router();
const { session:{ getAllSessions, createSession, getSessionById, getSessionByPhrase }, game:{ createGame } } = require("../../controllers");

// matches with /api/sessions
router
  .route('/')
  .get(getAllSessions)
  .post(createSession)

// matches with /api/sessions/game
// router
//   .route('/game')
//   .post(createGame)

// matches with /api/sessions/phrase/:sessionPhrase
router
  .route('/phrase/:sessionPhrase')
  .get(getSessionByPhrase)

// matches with /api/sessions/id/:id
router
  .route('/id/:_id')
  .get(getSessionById)

module.exports = router;