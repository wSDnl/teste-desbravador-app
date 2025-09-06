
function adicionarIframeModal(url) {

    let x = url.split('/')    

    if (x[3] != 'sw.js' && x[4] != 'sw.js') {

        const modalFundo = document.createElement("div");
        modalFundo.className = "iframeUploadModalFundo";

        const botaoFechar = document.createElement("button");
        botaoFechar.className = "botaoFecharModal";
        botaoFechar.textContent = "×";
        botaoFechar.title = "Fechar";
        botaoFechar.addEventListener("click", removerIframeModal);

        const modal = document.createElement("div");
        modal.className = "iframeUploadModal";

        const iframe = document.createElement("iframe");
        iframe.src = url
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.borderRadius = "10px";
        iframe.style.overflow = "hidden";
        
        modal.appendChild(iframe);
        modalFundo.appendChild(modal);
        modal.appendChild(botaoFechar);

        document.body.appendChild(modalFundo);
    }
}

function adicionarIframeModalSemClose(url) {

        // Criar o fundo do modal
        const modalFundo = document.createElement("div");
        modalFundo.className = "iframeUploadModalFundo";

        // Criar o botão de fechar
        const botaoFechar = document.createElement("button");
        botaoFechar.className = "botaoFecharModal";
        botaoFechar.textContent = "×"; // Caractere de "fechar"
        botaoFechar.title = "Fechar";
        botaoFechar.addEventListener("click", removerIframeModal);

        const modal = document.createElement("div");
        modal.className = "iframeUploadModal";

        // Criar o iframe e configurar as propriedades
        const iframe = document.createElement("iframe");
        iframe.src = url //"/comprador/upload-documento-modal/tipo/id_user";
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.borderRadius = "10px";
        iframe.style.overflow = "hidden";

        // Adicionar o iframe ao modal e o modal ao fundo
        modal.appendChild(iframe);
        modalFundo.appendChild(modal);
        //modal.appendChild(botaoFechar);

        // Adicionar o modal ao corpo do documento
        document.body.appendChild(modalFundo)
            
}

function removerIframeModal() {
    const modalFundo = document.querySelector(".iframeUploadModalFundo");
    if (modalFundo) {
        document.body.removeChild(modalFundo);
    }
}