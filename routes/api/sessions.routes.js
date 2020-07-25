const router = require("express").Router();
const { session:{ getAllSessions, createSession }, game:{ addGame, createGame } } = require("../../controllers");

// matches with /api/sessions
router
  .route('/')
  .get(getAllSessions)
  .post(createSession)

router
  .route('/game')
  .post(createGame)
  .patch(addGame)

module.exports = router;