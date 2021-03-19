const router = require("express").Router();
const reactionsController = require("../../controllers/reactionsController");

//  matches with "/api/reactions"
router.route("/")
    .get(reactionsController.findAll);

//  matches with "/api/reactions"
router.route("/")
    .post(reactionsController.create);
    
// matches with "/api/reactions/:id"
router.route("/:id")
    .post(reactionsController.create); 

//  matches with "/api/reactions/:id"
router.route("/:id")
    .get(reactionsController.findById)
    .put(reactionsController.update)
    .delete(reactionsController.remove);

module.exports = router;