const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

//chamar aqui só pra ele chamar o arquivo mongodb e estabelecer conexao com mongodb
require('./config/mongodb')



app.db = db
app.mongoose = mongoose


consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000,() =>{
    console.log('BackEnd na porta >>>3000<<<')
})