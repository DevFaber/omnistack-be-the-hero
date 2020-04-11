const { Router } = require('express')
const OngController = require('./controllers/OngController.js')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = new Router()

routes.post('/session', SessionController.store)

routes.post('/ongs', OngController.store)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentsController.store)
routes.get('/incidents', IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)
routes.put('/incidents/:id', IncidentsController.update)

routes.get('/profiles/', ProfileController.index)

module.exports = routes
