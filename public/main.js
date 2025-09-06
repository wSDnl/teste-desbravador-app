if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function(registration) {
            console.log("ok: ", registration.scope)
        })
        .catch(function(error) {
            console.log("erro: ", error)
        });
}