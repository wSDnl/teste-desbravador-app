const express = require('express')
const fetch = require('node-fetch')
const request = require('request')
const CONFIG = require('../../DataConfiguration/config')

class RequestObject {
    constructor(obj = {}) {
        this.Log = obj.Log
        this.urlApi = obj.urlApi
        this.token = obj.token
        this.endPoint = obj.endPoint
        this.params = obj.params
        this.type = obj.type
        this.obj = obj.obj
    }
    
    async RequestApi(URL_API, obj) {
        if (obj != undefined) {    
            this.urlApi = URL_API
            this.token = CONFIG.TOKEN
            this.endPoint = obj.endPoint
            this.params = obj.params
            this.type  = obj.type
            this.obj = obj.obj

            if(this.Log){this.Log.postLog()}

            const apiUrl = `${this.urlApi}${this.endPoint}${this.params}`;         
                    
            try {
                            
                let resp
                if (this.type === 'GET' || this.type === 'DELETE') {
                    resp = await fetch(apiUrl, {
                        method:this.type,
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Bearer': this.token
                        },                   
                    })                
                }else if (this.type === 'POST' || this.type === 'PUT') {
                    resp = await fetch(apiUrl, {
                        method:this.type,
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Bearer': this.token
                        },
                        body: JSON.stringify(this.obj)
                    })                
                }            

                if (resp.ok) {                
                    let data = await resp.json()                
                    return data
                } else {                
                    return resp.status
                }            
            } catch (error) { 
                console.log(error)           
                return error.message
            }
        }      
    }
}

module.exports = {
    RequestObject
}

// PROBLEMAS PARA IMPORTAR node-fetch
// npm install node-fetch@2.6.5
