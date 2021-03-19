module.exports = {
    UserReaction: require("./userReaction"),
    UserSentiment: require("./userSentiment"),
    UserData: require("./userData")
};

// 'use strict';

// const fs = require("fs");
// const path = require("path");
// const Mongoose = require("mongoose");
// const basename = path.basename(module.basename);
// const env = process.env.NODE_ENV || "production";
// const db = {};

// var mongoose = new Mongoose(process.env[env])

// fs.readFileSync(__dirname)
//     .filter(function(file) {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(function(file) {
//         const model = mongoose["import"](path.join(__dirname, file));
//         db[model.name] = model;
//     });

// Object.keys(db).forEach(function(modelName) {
//     if (db[mondelName].associate) {
//         db[modelName].associate(db)
//     }
// });

// db.mongoose = mongoose;
// db.Mongoose = Mongoose;

// module.exports = db;
