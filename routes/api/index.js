const router = require("express").Router();
const userReactionRoutes = require("./reactions");
const userSentimentRoutes = require("./sentiments");
const userDataRoutes = require("./users");

// user posts routes
router.use("/reactions", userReactionRoutes);
router.use("/sentiments", userSentimentRoutes);
router.use("/users", userDataRoutes);

module.exports = router;