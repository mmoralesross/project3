const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userDataSchema = new Schema({
    email: {
        type: String,
        required: true,
        // unique: true
    },
    username: {
        type: String,
        required: true,
        // unique: true
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

// userDataSchema.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// userDataSchema.addHook("beforeCreate", user => {
//     user.password = bcrypt.hashSync(
//         user.password,
//         bcrypt.genSaltSync(10),
//         null
//     );
// });

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;