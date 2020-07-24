const router = require("express").Router();

// Books routes
router.use("/sessions", require("./books.routes"));

module.exports = router;
