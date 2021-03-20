const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSentimentSchema = new Schema({
    sentiment: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserSentiment"
        }
    ]
});

const UserSentiment = mongoose.model("UserSentiment", userSentimentSchema);

module.exports = UserSentiment;