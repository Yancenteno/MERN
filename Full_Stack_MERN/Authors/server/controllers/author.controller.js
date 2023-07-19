const { Author } = require('../models/author.model')

module.exports = {
    find: (req, res) => {
        Author.find()
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    one: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Author.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Author.findOneAndDelete({ _id: req.params.id },)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    }
}