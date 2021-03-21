const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// router.use(passport.authenticate("local"));

//  matches with "/api/users"
router.route("/")
    .get(usersController.findAll);

// matches with "/api/users/login"
router.route("/login", passport.authenticate("local"))
    .post(usersController.login);

router.route("/user_data/:_id")
    .get(usersController.session);
    
// matches with "/api/users/login"
router.route("/signup")
    .post(usersController.signup);

router.route("/logout")
    .get(usersController.logout);

//  matches with "/api/users/:id"
router.route("/:_id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;