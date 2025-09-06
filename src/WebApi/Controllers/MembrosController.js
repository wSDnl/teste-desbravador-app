const express = require('express')
const router = express.Router()
const session = require('express-session');
const REPOSITORY = require('../../InfraData/Repositories/MembrosRepository')

router.get('/membros/:id',(req,res) => {
    REPOSITORY.GetMembros(req,res)
})

module.exports = router