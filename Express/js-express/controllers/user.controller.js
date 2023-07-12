const users = require('../models/user.model')

module.exports = {
    hello: (req, res) => {
        res.json({ message: "Hello world" })
    },

    allUsers: (req, res) => {
        res.json(users)
    },

    oneUser: (req, res) => {
        res.json(users[req.params.id])
    },

    newUser: (req, res) => {
        console.log(req.body);
        users.push(req.body);
        res.json({ status: "ok" });
    },

    updateUser: (req, res) => {
        const id = req.params.id
        users[id] = req.body
        res.json({ msg: "ok" })
    },

    deleteUser: (req, res) => {
        const id = req.params.id
        users.splice(id, 1)
        res.json()
    }




}