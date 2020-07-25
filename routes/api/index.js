const router = require("express").Router();

// sessions routes
router.use("/sessions", require("./sessions.routes"));

module.exports = router;
