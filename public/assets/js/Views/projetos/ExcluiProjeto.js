async function DeleteProjeto(id) {
    let obj = { id: id }
    await requisicaoAjax('POST', '/projto/delete', obj, 'DeleteProjetoSucesso', 'DeleteProjetoErro')
}

function DeleteProjetoSucesso(response) {
    if (response.http == "206") {
        alert(response.message)
    }

    if (response.http == "200") {
        alert('Sucesso')
        window.location.reload()
    }

}

function DeleteProjetoErro(response) {
    console.log(response)
}