const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userReactionSchema = new Schema({
    reaction: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true
    },
    img: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    sentiments: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserSentiment"
        }
    ]
});

const UserReaction = mongoose.model("UserReaction", userReactionSchema);

module.exports = UserReaction;