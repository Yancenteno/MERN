const Joke = require('../models/joke.model')

module.exports = {
    hello: (req, res) => {
        res.json({ message: "Hello there" })
    },

    allJokes: (req, res) => {
        Joke.find()
            .then(jokes => {
                res.json(jokes)
            })
            .catch(err => {
                res.json(err)
            })
    },

    oneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(joke => {
                res.json(joke)
            })
            .catch(err => {
                res.json(err)
            })
    },

    newJoke: (req, res) => {
        Joke.create(req.body)
            .then(joke => {
                res.json(joke);
            })
            .catch(err => {
                res.json(err);
            });
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(joke => {
                res.json(joke)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(joke => {
                res.json(joke)
            })
            .catch(err => {
                res.json(err)
            })
    }
}