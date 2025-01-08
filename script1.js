function copia(){
    const codigo = "00020126740014br.gov.bcb.pix0114228402150001530234Comunidade Evangelica Semear Bauru5204000053039865802BR5925COMUNIDADE EVANGELICA SEM6005BAURU62290525AoWEmu48P2fjmZ0fAXkFdY4Aq630405AD";
    
    // Usando a API moderna do Clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codigo)
            .then(() => {
                alert("Código copiado: " + codigo);
            })
            .catch(err => {
                console.error("Erro ao copiar usando navigator.clipboard: ", err);
                fallbackCopyText(codigo);
            });
    } else {
        // Fallback para navegadores que não suportam navigator.clipboard
        fallbackCopyText(codigo);
    }

    // Função de fallback usando textarea
    function fallbackCopyText(text) {
        const tempInput = document.createElement("textarea");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
        try {
            const sucesso = document.execCommand("copy");
            if (sucesso) {
                alert("Código copiado: " + text);
            } else {
                alert("Falha ao copiar o código.");
            }
        } catch (err) {
            console.error("Erro ao copiar usando fallback: ", err);
            alert("Erro ao copiar o código.");
        }
        document.body.removeChild(tempInput);
    }
}