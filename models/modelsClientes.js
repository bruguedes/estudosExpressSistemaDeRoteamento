
const fs = require('fs');
const {join} = require('path');

const filePath = join(__dirname,'/../dataBase/','clientes.json')

const getUsers = ()=>{
    const data = fs.existsSync(filePath)?fs.readFileSync(filePath):[]

    try{
        return JSON.parse(data)
    }catch(error){
        return[]
    }
}

const saveUser = (users)=>{
    fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))
}

const cadastrar = (item) => {
    const users = getUsers()
    users.push(item)
    saveUser(users)
          
  }




const atualizar = (reqQuery) =>{
    const users = getUsers() 
    let {id} = reqQuery
    saveUser(users.map(user=>{
        if(user.id === id){
            return{
                ...user,
                ...reqQuery
            }
        }
        return user;
    }))
}

const deletar = (id)=>{
    const users = getUsers()
    saveUser(users.filter(user => user.id !== id))
}

const pesquisaPorId = (id)=>{
    const users = getUsers()
    return users.filter(user => user.id === id)
}


const listarContatos = ()=>{
    
    const user = getUsers()
    return user
}


module.exports = {

    atualizar,
    cadastrar,
    deletar,
    listarContatos,
    pesquisaPorId,
}