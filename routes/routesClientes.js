const express = require('express')
const router = express.Router()

const controllersClientes = require('../controllers/controllersClientes')

router.get('/:id?', controllersClientes.exibeTodosClientes)

//router.get('/:id',controllersClientes.pesquisaPorId)

router.post('/cadastrar', controllersClientes.cadastrar)

router.put('/atualizar', controllersClientes.atualizar)

router.delete('/deletar/:id', controllersClientes.deletar)

module.exports = router