function manipulacaoFrase() {
    let frase = prompt("Digite a frase que deseja manipular");
    let fraseEmMaiusculo = frase.toUpperCase();
    let fraseEmMinusculo = frase.toLowerCase();
    let tamanho = frase.length;
  
    exibirResultado("fraseDigitada", `A frase digitada foi: ${frase}`);
    exibirResultado("fraseMaiuscula", `A frase em maiúscula: ${fraseEmMaiusculo}`);
    exibirResultado("fraseMinuscula", `A frase em minúscula: ${fraseEmMinusculo}`);
    exibirResultado("tamanhoFrase", `O número de caracteres dessa frase é: ${tamanho}`)
  }
  
  function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).textContent = mensagem;
  }