const express = require ('express')
const app= express()
const bodyParser = require('body-parser')
const models = require('./models')


app.use(bodyParser({
    extented : true 
}))

models
    .sequelize
    .sync()
    .then(app.listen(3000,()=> {
        console.log('Server is running')
    } ))