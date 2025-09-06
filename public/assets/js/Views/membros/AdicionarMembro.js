async function AdicionarMembro(funcionario) {
    let obj = { 
        projeto:$('#projeto').val(),
        funcionario:funcionario 
    }
    await requisicaoAjax('POST', '/projeto/membro', obj, 'AdicionarMembroSucesso', 'AdicionarMembroErro')
}

function AdicionarMembroSucesso(response) {
    if (response.http == "206") {
        alert(response.message)
    }

    if (response.http == "200") {
        alert('Sucesso')
        window.location.reload()
    }

}

function AdicionarMembroErro(response) {
    console.log(response)
}