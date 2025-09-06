const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const Sequelize = require('sequelize')
const CONFIG = require('../../DataConfiguration/config')
const INTERFACE = require('../../Domain/Interface/IGeral')

//#region GetProjetoNovo
async function GetProjetoNovo(req, res) {        
    let obj = {        
        endPoint: `/api/membros/v1/gerentes`,
        params: '',
        type: 'GET',
        obj: {}
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    
    res.render('Projetos/novo',{
        response:response.data
    })
}
//#endregion

//#region GetProjetosLista
async function GetProjetosLista(req, res) {
    let obj = {        
        endPoint: `/api/projetos/v1/all`,
        params: '',
        type: 'GET',
        obj: {}
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    
    res.render('Projetos/lista',{
        response:response.data
    })
}
//#endregion

//#region PostProjetoNovo
async function PostProjetoNovo(req, res) {
    let obj = {        
        endPoint: `/api/projetos/v1`,
        params: '',
        type: 'POST',
        obj:req.body
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    
    GetProjetoNovo(req, res)
}
//#endregion

//#region PostProjetoDelete
async function PostProjetoDelete(req, res) {
    let obj = {        
        endPoint: `/api/projetos/v1`,
        params: `/${req.body.id}`,
        type: 'DELETE',
        obj: {}
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    
    res.send(response)
}
//#endregion

//#region PostProjetoMembro
async function PostProjetoMembro(req, res) {
    let obj = {        
        endPoint: `/api/projetos/v1/projetos/membros`,
        params: '',
        type: 'POST',
        obj:req.body
    }
    let response = await INTERFACE.RequestObject.RequestApi(CONFIG.URL_API, obj)    
    res.send(response)
}
//#endregion

module.exports = {
    GetProjetoNovo,
    GetProjetosLista,
    GetProjetoNovo,
    PostProjetoDelete,
    PostProjetoNovo,
    PostProjetoMembro,
}
