function verificarAno() {
  const elemento = document.getElementById('ano');

  if (elemento instanceof HTMLInputElement) {
    const number = parseInt(elemento.value);

    if (!isNaN(number)) {
      if (number % 4 === 0) {
        exibirResultado('resultado',`O ano inserido foi ${number}, ele é um ano BISSEXTO`
        );
      } 
      else {
        exibirResultado('resultado',`O ano inserido foi ${number}, ele NÃO um é um ano BISSEXTO`
        );
      }
    }
  }
}

function exibirResultado(elementId, mensagem) {
  document.getElementById(elementId).innerText = mensagem;
}

