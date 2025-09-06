function CriaAlerta(text) {

    $.jGrowl(text, {
        theme: 'bg-primary2 alert-rounded2'
    })

    // var numeroAleatorio = Math.floor(Math.random() * 90000) + 10000
    // var novaDiv = document.createElement("div")
    // novaDiv.className = "classDivAlerta"
    // novaDiv.innerText = text
    // novaDiv.id = "aviso_" + numeroAleatorio
    // document.getElementById("sistemaAlertas").appendChild(novaDiv)

    // var divExistente = document.getElementById("sistemaAlertas");
    // var divParaRemover = document.getElementById("aviso_" + numeroAleatorio);
    // setTimeout(() => {
    //     divExistente.removeChild(divParaRemover)
    // }, 3000);

}

function CriaAlertaPrimaryPNotify(titulo, text) {
    $.jGrowl(text, {
        header: titulo,
        theme: 'bg-primary2'
    })
}

function CriaAlertaDangerPNotify(titulo, text) {
    $.jGrowl(text, {
        header: titulo,
        theme: 'bg-danger'
    })
}

function CriaAlertaSuccessPNotify(titulo, text) {    
    $.jGrowl(text, {
        header: titulo,
        theme: 'bg-success'
    })
}

function CriaAlertaWarningPNotify(titulo, text) {
    $.jGrowl(text, {
        header:titulo,
        theme: 'bg-warning'
    })
}

function CriaAlertaInfo(titulo, text) {
    $.jGrowl(text, {
        header:titulo,
        theme: 'bg-info'
    })
}