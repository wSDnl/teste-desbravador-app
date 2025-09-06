const express = require('express')
const router = express.Router()
const session = require('express-session');
const REPOSITORY = require('../../InfraData/Repositories/ProjetosRepository')

router.get('/',(req,res) => {
    REPOSITORY.GetProjetosLista(req,res)
})

router.get('/projeto/novo',(req,res) => {
    REPOSITORY.GetProjetoNovo(req,res)
})

router.post('/projeto/novo',(req,res) => {
    REPOSITORY.PostProjetoNovo(req,res)
})

router.post('/projeto/membro',(req,res) => {
    REPOSITORY.PostProjetoMembro(req,res)
})

router.post('/projto/delete',(req,res) => {
    REPOSITORY.PostProjetoDelete(req,res)
})

module.exports = router