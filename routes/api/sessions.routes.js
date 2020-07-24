const router = require("express").Router();
// const { booksController } = require("../../controllers");
console.log(booksController);

// Matches with '/api/sessions'
// router
//   .route("/")
//   .get(booksController.findAll)
//   .post(booksController.save);

// Matches with '/api/sessions/:id'
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .delete(booksController.delete);

// Matches with '/api/sessions/check'
// router
//   .route('/check')
//   .post(booksController.crossCheck)
module.exports = router;