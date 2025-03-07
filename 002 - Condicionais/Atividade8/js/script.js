function resultado() {
    // Obtém os elementos dos inputs
    const element1 = document.getElementById("number1Input");
    const element2 = document.getElementById("number2Input");
    const operacaoInput = document.getElementById("operacao");

    // Verifica se os elementos são válidos
    if (element1 instanceof HTMLInputElement && element2 instanceof HTMLInputElement && operacaoInput instanceof HTMLInputElement) {
        // Converte os valores para números
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);
        const escolhaOperacao = parseInt(operacaoInput.value);

        // Valida se os valores são números válidos
        if (!isNaN(number1) && !isNaN(number2) && !isNaN(escolhaOperacao)) {
            let resultado;

            // Executa a operação escolhida
            switch (escolhaOperacao) {
                case 1:
                    resultado = (number1 + number2) / 2;
                    exibirResultado("saida", `O resultado da média é: ${resultado}`);
                    break;
                case 2:
                    resultado = number1 - number2;
                    exibirResultado("saida", `O resultado da diferença é: ${resultado}`);
                    break;
                case 3:
                    resultado = number1 * number2;
                    exibirResultado("saida", `O resultado da multiplicação é: ${resultado}`);
                    break;
                case 4:
                    if (number2 === 0) {
                        exibirResultado("saida", "Divisão por zero não é permitida.");
                    } else {
                        resultado = number1 / number2;
                        exibirResultado("saida", `O resultado da divisão é: ${resultado}`);
                    }
                    break;
                default:
                    exibirResultado("saida", "Opção inválida. Escolha um número entre 1 e 4.");
            }
        } else {
            alert("Por favor, insira apenas números válidos.");
        }
    } else {
        alert("Erro ao encontrar os elementos.");
    }
}
function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).textContent = mensagem;
}

