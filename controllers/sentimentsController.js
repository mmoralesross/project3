const db = require("../models");

module.exports = {
    create: function (req, res) {
        let { id } = req.params;
        db.UserSentiment
            .create(req.body)
            .then(({ _id }) => db.UserReaction.findOneAndUpdate({_id:id}, { $push: { sentiments: _id }}, { new:true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.UserSentiment
            .find({})
            .populate("comments")
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.UserSentiment
            .findById(req.params.id)
            .populate("comments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.UserSentiment
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.UserSentiment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};