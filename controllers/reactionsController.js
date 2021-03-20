const db = require("../models");

module.exports = {
    create: function (req, res) {
        const { id } = req.params;

        if (id) {
            db.UserSentiment
                .create(req.body)
                .then(({ _id }) => db.UserSentiment.findOneAndUpdate({_id: id}, { $push: { comments: _id }}, { new: true }))
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        } else {
            db.UserReaction
                .create(req.body)
                .then(({ _id }) => db.UserData.findOneAndUpdate({ email:req.body.email }, { $push: { reactions: _id }}, { new:true }))
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        };
    },
    update: function (req, res) {
        db.UserReaction
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.UserReaction
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.UserReaction
            .find({})
            .populate("sentiments")
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.UserReaction
            .findById(req.params.id)
            .populate("sentiments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};