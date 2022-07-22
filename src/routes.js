const Express = require('express')
const RoleController = require('./controllers/RoleController')
const UserController = require('./controllers/UserController')
const routes = Express.Router()

// Rotas Usuário
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

// Rotas Role
routes.get('/roles', RoleController.index)
routes.post('/roles', RoleController.store)

module.exports = routes