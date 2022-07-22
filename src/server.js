const Express = require('express')
const app = Express()
const port = 3000
const routes = require('./routes')
require('./database/index')

app.use(Express.json())
app.use(routes)

app.listen(port)