const Express = require('express')
const RoleController = require('./controllers/RoleController')
const UserController = require('./controllers/UserController')
const routes = Express.Router()
const auth = require('./middleware/checkToken')

// Rotas Usuário
routes.get('/users', UserController.selectAll)
routes.post('/user', auth, UserController.insert)

// Rotas Role
routes.get('/roles', RoleController.selectAll)
routes.post('/role', RoleController.insert)

// Rotas Login
routes.post('/login', UserController.login)


module.exports = routes