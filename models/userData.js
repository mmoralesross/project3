const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: "UserReaction"
        }
    ]
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;