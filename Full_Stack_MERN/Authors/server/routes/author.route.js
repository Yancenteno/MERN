const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/authors', AuthorController.find);
    app.post('/authors', AuthorController.create);
    app.get('/authors/:id', AuthorController.one)
    app.put('/authors/:id', AuthorController.update)
    app.delete('/authors/:id', AuthorController.delete)
}