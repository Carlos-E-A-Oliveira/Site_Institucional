function copia(){
    const codigo = "00020126740014br.gov.bcb.pix0114228402150001530234Comunidade Evangelica Semear Bauru5204000053039865802BR5925COMUNIDADE EVANGELICA SEM6005BAURU62290525AoWEmu48P2fjmZ0fAXkFdY4Aq630405AD";
    
    // Usando a API moderna do Clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codigo)
            .then(() => {

                Toastify({
                    text: "Código copiado com sucesso!",
                    duration: 3000,
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                      background: "rgb(22, 105, 131)",
                    },
                    onClick: function(){} 
                }).showToast();
                
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
                Toastify({
                    text: "Código copiado com sucesso!",
                    duration: 3000,
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                      background: "rgb(22, 105, 131)",
                    },
                    onClick: function(){} 
                }).showToast();
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

function home() {

    window.scrollTo({
        top: 0,         
        
    });
    hiddenOracao()
}
function nos(posicao){
    const nos = document.getElementById(posicao);

    if (nos) {
        const nosPosition = nos.getBoundingClientRect().top + window.pageYOffset -60;

        window.scrollTo({
            top: nosPosition,
        });
        
    }
    hiddenOracao()
}

function culto(yculto){
    const culto = document.getElementById(yculto);
    
    if (culto) {
        const cultoPosition = culto.getBoundingClientRect().top + window.pageYOffset -60;

        window.scrollTo({
            top: cultoPosition,
        });
    }
    hiddenOracao()
}

function evento(yevento){
    const evento = document.getElementById(yevento);
    
    if (evento) {
        const eventoPosition = evento.getBoundingClientRect().top + window.pageYOffset + 50;

        window.scrollTo({
            top: eventoPosition,
        });
    }
    hiddenOracao()
}

function galeria(ygaleria){
    const galeria = document.getElementById(ygaleria);
    
    if (galeria) {
        const galeriaPosition = galeria.getBoundingClientRect().top + window.pageYOffset + 50;

        window.scrollTo({
            top: galeriaPosition,
        });
    }
    hiddenOracao()
}

function doacao(yoferta){
    const doacao = document.getElementById(yoferta);
    
    if (doacao) {
        const doacaoPosition = doacao.getBoundingClientRect().top + window.pageYOffset - 60;

        window.scrollTo({
            top: doacaoPosition,
        });
    }
    hiddenOracao()
}

function oracao(oracao_element){
    const oracao_id = document.getElementById(oracao_element);
    const bodyElement = document.getElementById('body');
    const ped_oracao_titulo = document.getElementById('ped_oracao_titulo');
    const ped_oracao_titulo1 = document.getElementById('ped_oracao_titulo1');
    const ped_oracao_titulo2 = document.getElementById('ped_oracao_titulo2');
    const ped_oracao_titulo3 = document.getElementById('ped_oracao_titulo3');
    const ped_oracao_text1 = document.getElementById('ch_oracao_input');
    const ped_oracao_text2 = document.getElementById('ch_oracao_input2');
    const ped_oracao_text3 = document.getElementById('ch_oracao_input3');
    const ped_oracao_chbx1 = document.getElementById('ch_oracao_chbx1');
    const ped_oracao_chbx2 = document.getElementById('ch_oracao_chbx2');
    const ped_oracao_chbx3 = document.getElementById('ch_oracao_chbx3');
    const ped_oracao_chbx4 = document.getElementById('ch_oracao_chbx4');
    const ped_oracao_chbx5 = document.getElementById('ch_oracao_chbx5');
    const ped_oracao_chbx6 = document.getElementById('ch_oracao_chbx6');
    const text_oracao1 = document.getElementById('ch_text_oracao1');
    const text_oracao2 = document.getElementById('ch_text_oracao2');
    const text_oracao3 = document.getElementById('ch_text_oracao3');
    const text_oracao4 = document.getElementById('ch_text_oracao4');
    const text_oracao5 = document.getElementById('ch_text_oracao5');
    const text_oracao6 = document.getElementById('ch_text_oracao6');
    const botao_enviar = document.getElementById('botao_enviar');
    const ped_oracao2 = document.getElementById('ped_oracao_back');
    home();

    if (oracao_id) {
        oracao_id.style.width = '100%';
        bodyElement.style.overflow = 'hidden';
        ped_oracao_titulo.style.display = 'flex';
        ped_oracao_titulo1.style.display = 'flex';
        ped_oracao_titulo2.style.display = 'flex';
        ped_oracao_titulo3.style.display = 'flex';
        ped_oracao_text1.style.display = 'flex';
        ped_oracao_text2.style.display = 'flex';
        ped_oracao_text3.style.display = 'flex';
        ped_oracao_chbx1.style.display = 'flex';
        ped_oracao_chbx2.style.display = 'flex';
        ped_oracao_chbx3.style.display = 'flex';
        ped_oracao_chbx4.style.display = 'flex';
        ped_oracao_chbx5.style.display = 'flex';
        ped_oracao_chbx6.style.display = 'flex';
        text_oracao1.style.display = 'flex';
        text_oracao2.style.display = 'flex';
        text_oracao3.style.display = 'flex';
        text_oracao4.style.display = 'flex';
        text_oracao5.style.display = 'flex';
        text_oracao6.style.display = 'flex';
        botao_enviar.style.display = 'flex';
        ped_oracao2.style.display = 'grid';
    }
    
}

function hiddenOracao(){
    const oracao_id = document.getElementById('ch_oracao');
    const bodyElement = document.getElementById('body');
    const ped_oracao_titulo = document.getElementById('ped_oracao_titulo');
    const ped_oracao_titulo1 = document.getElementById('ped_oracao_titulo1');
    const ped_oracao_titulo2 = document.getElementById('ped_oracao_titulo2');
    const ped_oracao_titulo3 = document.getElementById('ped_oracao_titulo3');
    const ped_oracao_text1 = document.getElementById('ch_oracao_input');
    const ped_oracao_text2 = document.getElementById('ch_oracao_input2');
    const ped_oracao_text3 = document.getElementById('ch_oracao_input3');
    const ped_oracao_chbx1 = document.getElementById('ch_oracao_chbx1');
    const ped_oracao_chbx2 = document.getElementById('ch_oracao_chbx2');
    const ped_oracao_chbx3 = document.getElementById('ch_oracao_chbx3');
    const ped_oracao_chbx4 = document.getElementById('ch_oracao_chbx4');
    const ped_oracao_chbx5 = document.getElementById('ch_oracao_chbx5');
    const ped_oracao_chbx6 = document.getElementById('ch_oracao_chbx6');
    const text_oracao1 = document.getElementById('ch_text_oracao1');
    const text_oracao2 = document.getElementById('ch_text_oracao2');
    const text_oracao3 = document.getElementById('ch_text_oracao3');
    const text_oracao4 = document.getElementById('ch_text_oracao4');
    const text_oracao5 = document.getElementById('ch_text_oracao5');
    const text_oracao6 = document.getElementById('ch_text_oracao6');
    const botao_enviar = document.getElementById('botao_enviar');
    const ped_oracao2 = document.getElementById('ped_oracao_back');

    if (oracao_id) {
        oracao_id.style.width = '0px';
        bodyElement.style.overflowY = 'auto';
        bodyElement.style.overflowX = 'hidden';
        ped_oracao_titulo.style.display = 'none';
        ped_oracao_titulo1.style.display = 'none';
        ped_oracao_titulo2.style.display = 'none';
        ped_oracao_titulo3.style.display = 'none';
        ped_oracao_text1.style.display = 'none';
        ped_oracao_text2.style.display = 'none';
        ped_oracao_text3.style.display = 'none';
        ped_oracao_chbx1.style.display = 'none';
        ped_oracao_chbx2.style.display = 'none';
        ped_oracao_chbx3.style.display = 'none';
        ped_oracao_chbx4.style.display = 'none';
        ped_oracao_chbx5.style.display = 'none';
        ped_oracao_chbx6.style.display = 'none';
        text_oracao1.style.display = 'none';
        text_oracao2.style.display = 'none';
        text_oracao3.style.display = 'none';
        text_oracao4.style.display = 'none';
        text_oracao5.style.display = 'none';
        text_oracao6.style.display = 'none';
        botao_enviar.style.display = 'none';
        ped_oracao2.style.display = 'none';
        
    }

}
let chk1Verificado = false;
let chk2Verificado = false;
let chk3Verificado = false;
let chk4Verificado = false;
let chk5Verificado = false;
let chk6Verificado = false;
function enviar() {
    const nome = document.getElementById('ch_oracao_input');
    const area = document.getElementById('ch_oracao_input2');
    const relato = document.getElementById('ch_oracao_input3');
    const chkbx1 = document.getElementById('ch_oracao_chbx1');
    const chkbx2 = document.getElementById('ch_oracao_chbx2');
    const chkbx3 = document.getElementById('ch_oracao_chbx3');
    const chkbx4 = document.getElementById('ch_oracao_chbx4');
    const chkbx5 = document.getElementById('ch_oracao_chbx5');
    const chkbx6 = document.getElementById('ch_oracao_chbx6');

    chk1Verificado = chkbx1.checked;
    chk2Verificado = chkbx2.checked;
    chk3Verificado = chkbx3.checked;
    chk4Verificado = chkbx4.checked;
    chk5Verificado = chkbx5.checked;
    chk6Verificado = chkbx6.checked;
    
    const nomeText = nome.value;
    const areaText = area.value;
    const relatoText = relato.value;
    let textoFinal = `Nome: ${nomeText} // Orar por:${chk1Verificado ? ' - Familia' : ''}${chk2Verificado? ' - Finanças' : ''}${chk3Verificado? ' - Cura' : ''}${chk4Verificado? ' - Libertação' : ''}${chk5Verificado? ' - Vida Espiritual' : ''}${chk6Verificado? ' - Emprego' : ''} - ${areaText} // Relato: ${relatoText}`;
    const telefoneNum = 5514988070943;
    const whatsappLink = `https://wa.me/${telefoneNum}?text=${textoFinal}`;

    if(!chkbx1.checked && !chkbx2.checked && !chkbx3.checked && !chkbx4.checked && !chkbx5.checked && !chkbx6.checked && !areaText){
        Toastify({
            text: "É necessário preencher uma das áreas!",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "rgb(131, 22, 22)",
            },
            onClick: function(){} 
        }).showToast();
        return;
    } else if(relatoText === ""){
        Toastify({
            text: "É necessário preencher o campo 'Relato'!",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "rgb(131, 22, 22)",
            },
            onClick: function(){} 
        }).showToast();

    } else {
        window.open(whatsappLink, '_blank');
        
        nome.value = '';
        area.value = '';
        relato.value = '';

        chkbx1.checked = false;
        chkbx2.checked = false;
        chkbx3.checked = false;
        chkbx4.checked = false;
        chkbx5.checked = false;
        chkbx6.checked = false;
    }
}
   


