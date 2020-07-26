const router = require("express").Router();
const { session:{ getAllSessions, createSession }, game:{ createGame, createGame2 } } = require("../../controllers");

// matches with /api/sessions
router
  .route('/')
  .get(getAllSessions)
  .post(createSession)

// matches with /api/sessions/game
router
  .route('/game')
  .post(createGame2)

module.exports = router;