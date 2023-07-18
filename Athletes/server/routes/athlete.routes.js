const AthleteController = require('../controllers/athlete.controler')

module.exports = app => {
    app.get('/api/athletes', AthleteController.find);
    app.post('/api/athletes', AthleteController.create);
    app.get('/api/athletes/:id', AthleteController.one);
    app.put('/api/athletes/:id', AthleteController.update);
    app.delete('/api/athletes/:id', AthleteController.delete)
}