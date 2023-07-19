const { Note } = require('../models/Note.model')

module.exports = {
    find: (req, res) => {
        Note.find()
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    one: (req, res) => {
        Note.findOne({ _id: req.params.id })
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Note.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Note.findOneAndDelete({ _id: req.params.id },)
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    }
}
