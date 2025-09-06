const express   = require('express')
const session   = require('express-session')
const FileStore = require('session-file-store')(session)
const fs        = require('fs')
const app       = express()
require('dotenv').config()

const port       = process.env.PORT
const bodyParser = require('body-parser')
const ProjetosController = require('./src/WebApi/Controllers/ProjetosController')
const MembrosController = require('./src/WebApi/Controllers/MembrosController')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('views'))
app.use(session({ store: new FileStore(), secret: '1012', resave: false, saveUninitialized: true }))

app.use('/',ProjetosController)
app.use('/',MembrosController)
app.listen(port,()=>{
    console.log(port + ":Teste ")        
})

