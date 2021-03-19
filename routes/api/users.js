const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

//  matches with "/api/users"
router.route("/")
    .get(usersController.findAll);

// matches with "/api/users/login"
router.route("/login", passport.authenticate("local"))
    .post(usersController.login);

// matches with "/api/users/login"
router.route("/signup")
    .post(usersController.signup);

//  matches with "/api/users/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

router.route("/logout")
    .get(usersController.logout);

module.exports = router;