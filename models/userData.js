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

userDataSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

    // userDataSchema.pre("create", (user, next) => {
    //     console.log(user)
    //     next();
    // });

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;

// module.exports = function () {
//     const userDataSchema = new Schema({
//         email: {
//             type: String,
//             required: true,
//             // unique: true
//         },
//         username: {
//             type: String,
//             required: false,
//             // unique: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         reactions: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: "UserReaction"
//             }
//         ]
//     });

//     userDataSchema.prototype.validPassword = function (password) {
//         return bcrypt.compareSync(password, this.password);
//     };

//     userDataSchema.addHook("beforeCreate", user => {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     });

//     const UserData = mongoose.model("UserData", userDataSchema);

//     return UserData;
// };
