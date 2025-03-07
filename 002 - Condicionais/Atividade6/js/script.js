function verificarPalavra() {
    const palavraInput = document.getElementById("palavra");
  
    if (palavraInput instanceof HTMLInputElement) {
      const palavra = palavraInput.value.toLowerCase(); 
  
      // Inverter a palavra:
      const palavraInvertida = palavra.split('').reverse().join('');
  
  
      if (palavra === palavraInvertida) {
        alert(`A palavra ${palavra} é um palíndromo.`);
      } else {
        exibirResultado("resultado", `A palavra ${palavra} não é um palíndromo.`);
      }
    } else {
      alert("Erro ao encontrar o elemento.");
    }
  }

  function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}