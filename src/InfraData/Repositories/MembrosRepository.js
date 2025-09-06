const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const Sequelize = require('sequelize')
const CONFIG = require('../../DataConfiguration/config')
const INTERFACE = require('../../Domain/Interface/IGeral')

//#region GetMembros
async function GetMembros(req, res) {        

    // LISTA FUNCIONARIOS
    let obj = {        
        endPoint: `/api/membros/v1/funcionarios`,
        params: '',
        type: 'GET',
        obj: {}
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    

    // LISTA MEMBROS
    let objMembros = {        
        endPoint: `/api/projetos/v1/membros`,
        params: `/id/${req.params.id}`,
        type: 'GET',
        obj: {}
    }
    let responseMembros = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, objMembros)    

    res.render('Membros/membros',{
        id:req.params.id,
        response:response.data,
        responseMembros:responseMembros.data
    })
}
//#endregion

module.exports = {
    GetMembros,
}
