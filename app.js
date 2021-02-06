const express = require('express')
const app = express()
const routesClientes = require('./routes/routesClientes')


app.use('/', routesClientes)


app.listen(3001, () => {
  console.log(`Servidor executando na uri http://localhost:3001`)
})