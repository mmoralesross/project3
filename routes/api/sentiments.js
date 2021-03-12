const router = require("express").Router();
const sentimentsController = require("../../controllers/sentimentsController");

//  matches with "/api/sentiments"
router.route("/")
    .get(sentimentsController.findAll);

// matches with "/api/sentiments/:id"
// where :id refers to another user's reaction
router.route("/:id")
    .post(sentimentsController.create); 

//  matches with "/api/sentiments/:id"
router.route("/:id")
    .get(sentimentsController.findById)
    .put(sentimentsController.update)
    .delete(sentimentsController.remove);

module.exports = router;