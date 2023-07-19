const NoteController = require('../controllers/Note.controller')

module.exports = app => {
    app.get('/notes', NoteController.find);
    app.post('/notes', NoteController.create);
    app.get('/notes/:id', NoteController.one);
    app.put('/notes/:id', NoteController.update);
    app.delete('/notes/:id', NoteController.delete);
}