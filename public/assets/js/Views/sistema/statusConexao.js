var interval

window.addEventListener('online', (event) => {
    clearInterval(interval)
    CriaAlertaSuccessPNotify('Conexão','Você esta ONLINE')      
})    

window.addEventListener('offline', (event) => {
    CriaAlertaDangerPNotify('Erro de conexão','Você esta OFFLINE, verifique sua conexão com a internet')              
    interval = setInterval(() => {
        CriaAlertaDangerPNotify('Erro de conexão','Você esta OFFLINE, verifique sua conexão com a internet')              
    }, 10000)
})    