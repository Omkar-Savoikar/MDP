require('./database/connection')
const Data = require('./database/model')

const user = {
    name1: 'Omkar',
    Age: 23 
}

const data = async ()=>{
    await Data(user).save()
}

data()
