async function buscarVersiculoAleatorio() {
    try {
      /* const versiculos = [
        "João 3:16",
        "Salmo 23:1",
        "Filipenses 4:13",
        "1 Coríntios 13:4",
        "Mateus 5:3",
        "1 Samuel 2:21"
      ]; */
      const versiculos = [
        "Salmos 126:3",
        "Salmos 126:3"
      ];
  
      const versiculoAleatorio = versiculos[Math.floor(Math.random() * versiculos.length)];
  
      const url = `https://bible-api.com/${versiculoAleatorio}?translation=almeida`;
  
      const resposta = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
  
      const dados = await resposta.json();
  
      // Verifica se os dados necessários estão presentes
      const versiculo = dados && dados.text
        ? `${dados.reference} - "${dados.text}"`
        : "Versículo não encontrado";
      
      console.log("Versículo Aleatório:", versiculo);
  
      const elementoVersiculo = document.getElementById("versiculo");
      if (elementoVersiculo) {  // O objetivo do if é verificar se o elemento de ID=versiculo existe na estrutura HTML
        elementoVersiculo.innerText = versiculo;
      }
  
      exibirMensagemAleatoria();
  
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
  function exibirMensagemAleatoria() {
    const mensagens = [
      "A fé é a certeza das coisas que se esperam, a convicção de fatos que não se veem.",
      "O Senhor é meu pastor, nada me faltará.",
      "Tudo posso naquele que me fortalece.",
      "O amor é paciente, o amor é bondoso.",
      "Bem-aventurados os que têm fome e sede de justiça, pois serão fartos."
    ];
  
    // Escolhe uma mensagem aleatória
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    const mensagemEscolhida = mensagens[indiceAleatorio];
  
    // Exibe a mensagem no console ou na página
    const elementoMensagem = document.getElementById("mensagem");
    if (elementoMensagem) {
      elementoMensagem.innerText = mensagemEscolhida;
    }
  }
  
  document.addEventListener("DOMContentLoaded", buscarVersiculoAleatorio);