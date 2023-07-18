const MovieController = require('../controllers/movie.controller')

module.exports = app => {
    app.post('/api/movies', MovieController.create);

    app.get('/api/movies', MovieController.all);

    app.get('/api/movies/:id', MovieController.one);

    app.put('/api/movies/:id', MovieController.update);

    app.delete('/api/movies/:id', MovieController.delete);
}