// obj = {teste:"0"}
// requisicaoAjax('POST','/documentos-em-analise',obj,'documentosEmAnaliseSucesso','documentosEmAnaliseErro')		

// let teste = req.body
// console.log(teste.nome)

function requisicaoAjax(tipo,url,obj,sucesso,erro) {		
    $.ajax({
        url: url,
        data: obj,
        type: tipo,
        dataType: 'json',
        success: function (retorno){
            window[sucesso](retorno);
        },
        complete: function (retorno) {
            //window[sucesso](retorno);
        },
        error: function (retorno) { 
            window[erro](retorno);
        },
    })		
}


// onfocus="scrollIntoViewFunc(this.id)" onclick="scrollIntoViewFunc(this.id)"
function scrollIntoViewFunc(element) {	
    var elemento = document.getElementById(""+element+"");
    elemento.scrollIntoView();
  }	