const User = require('../models/user.model')

module.exports = {
    hello: (req, res) => {
        res.json({ message: "Hello world" })
    },

    allUsers: (req, res) => {
        User.find()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    },

    oneUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.json(err)
            })
    },

    newUser: (req, res) => {
        User.create(req.body)
            .then(newUser => {
                res.json(newUser)
            })
            .catch(err => {
                res.json(err)
            })
    },

    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.json(err)
            })
    }




}