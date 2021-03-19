const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
    login: function(req, res) {
        res.json(req.user);
        console.log(req.user)
    },
    logout: function(req, res) {
        req.logout();
        res.redirect("/home");
    },
    signup: function (req, res) {
        const userBody = req.body;
        userBody.password = bcrypt.hashSync(userBody.password, bcrypt.genSaltSync(10), null);
        db.UserData
            .create(userBody)
            .then(dbModel => {
                console.log(dbModel); 
                res.json(dbModel) 
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.UserData
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.UserData
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.UserData
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.UserData
            .find({ _id: req.params.id })
            .populate("reactions")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};