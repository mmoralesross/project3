const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
    login: function(req, res) {
        db.UserData.findOne({ email:req.body.email })
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    session: function(req, res) {
        const { _id } = req.params;
        db.UserData.findById(_id)
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => res.status(422).json(err));
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
            .then(dbModel => res.json(dbModel))
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
        const { _id } = req.params;
        db.UserData
            .findById(_id)
            .populate("reactions")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};