const { Athlete } = require('../models/athlete.model');

module.exports = {
    find: (req, res) => {
        Athlete.find()
            .then(athlete => res.json(athlete))
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Athlete.create(req.body)
            .then(athlete => res.json(athlete))
            .catch(err => res.status(400).json(err))
    },

    one: (req, res) => {
        Athlete.findOne({ _id: req.params.id })
            .then(athlete => res.json(athlete))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Athlete.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(athlete => res.json(athlete))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Athlete.findOneAndDelete({ _id: req.params.id },)
            .then(athlete => res.json(athlete))
            .catch(err => res.status(400).json(err))
    }
}