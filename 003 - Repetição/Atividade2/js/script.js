function somar() {
    let element = document.getElementById('inputNumber');
    let soma = 0; // Inicializa soma com 0

    if (element instanceof HTMLInputElement) {
        let numero; // Declara numero aqui
        do {
            numero = parseFloat(prompt("Digite um número (ou -1 para finalizar):")); // Usando prompt para entrada múltipla
            if (!isNaN(numero)) {
                if (numero !== -1) {
                    soma += numero; // soma = soma + numero; forma abreviada
                }
            } else if (numero !== -1) { //Trata entradas não numéricas, exceto o -1
                alert("Entrada inválida. Digite um número ou -1.");
            }
        } while (numero !== -1);
    }

    exibirResultado(soma);
}

function exibirResultado(resultado) {
    let saida = document.getElementById('resultado');
    if (saida) { // Verifica se o elemento existe
        saida.textContent = 'A soma total é: ' + resultado;
    }
}