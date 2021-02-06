const modelsClientes = require('../models/modelsClientes')


const exibeTodosClientes = (req, res)=> {
    const {id} = req.params
    let resultado
    if(id){
        resultado = modelsClientes.pesquisaPorId(id)
    }else{
    resultado = modelsClientes.listarContatos()
    }
    res.send(resultado)
}


 const cadastrar=(req, res)=>{
    modelsClientes.cadastrar( req.query)
    res.status(201).send("Usuario Criado com Sucesso!")
  }

const atualizar = ((req, res) => {
    modelsClientes.atualizar(req.query)
    res.status(201).send("Usuario atulizado com sucesso")
})

const deletar = (req, res)=>{
    let {id}= req.params
    modelsClientes.deletar(id)
    res.status(201).send('Usuario Deletado!')
}

module.exports = {
    cadastrar,
    atualizar,
    deletar,
    exibeTodosClientes,
}