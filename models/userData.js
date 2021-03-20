const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userDataSchema = new Schema({
    email: {
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

userDataSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;