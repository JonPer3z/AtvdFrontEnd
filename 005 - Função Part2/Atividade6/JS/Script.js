// --- EXERCÍCIO: Calcular Imposto e Exibir Total ---

// 1. Crie uma função de seta chamada calcularImposto que recebe dois
// parâmetros: o valor de uma compra e a porcentagem de imposto. A função
// deve calcular e retornar o valor do imposto a ser pago.

// Define a função de seta 'calcularImposto'.
// - 'valorCompra': É o valor base da compra (ex: 100).
// - 'porcentagemImposto': É a taxa de imposto em porcentagem (ex: 10 para 10%).
const calcularImposto = (valorCompra, porcentagemImposto) => {
    // Para calcular o imposto, precisamos converter a porcentagem para um decimal.
    // Ex: 10% é 0.10, 5% é 0.05.
    const taxaDecimal = porcentagemImposto / 100;

    // O valor do imposto é o valor da compra multiplicado pela taxa decimal.
    const valorDoImposto = valorCompra * taxaDecimal;

    // Retorna o valor do imposto calculado.
    return valorDoImposto;
};


// 2. Em seguida, crie uma outra função que recebe o valor de uma compra e a
// porcentagem de imposto e exibe o valor total (compra + imposto).

// Define a função 'exibirValorTotalComImposto'.
// - 'valorCompra': O valor inicial da compra.
// - 'porcentagemImposto': A taxa de imposto a ser aplicada.
function exibirValorTotalComImposto(valorCompra, porcentagemImposto) {
    // Primeiro, usamos a função 'calcularImposto' para obter o valor apenas do imposto.
    const valorDoImposto = calcularImposto(valorCompra, porcentagemImposto);

    // O valor total é a soma do valor da compra com o valor do imposto.
    const valorTotal = valorCompra + valorDoImposto;

    // Formata os valores para exibição com duas casas decimais, o que é comum para dinheiro.
    // O método toFixed(2) retorna uma string, então é bom usar para exibição.
    const impostoFormatado = valorDoImposto.toFixed(2);
    const totalFormatado = valorTotal.toFixed(2);

    // Cria uma mensagem clara para exibir na tela.
    const mensagem = `
        Valor da Compra: R$ ${valorCompra.toFixed(2)}<br>
        Porcentagem de Imposto: ${porcentagemImposto}%<br>
        Valor do Imposto: R$ ${impostoFormatado}<br>
        ----------------------------------<br>
        Valor Total a Pagar: R$ ${totalFormatado}
    `;

    // Chama a função para imprimir essa mensagem no HTML.
    imprimirNaTela(mensagem);
}


// --- Interação com o HTML para este exercício ---

// 1. Acessando os elementos HTML:
// Pega o campo de entrada para o valor da compra.
const valorCompraInput = document.getElementById("valorCompraInput");

// Pega o campo de entrada para a porcentagem de imposto.
const porcentagemImpostoInput = document.getElementById("porcentagemImpostoInput");

// Pega o botão para acionar o cálculo.
const btnCalcularImposto = document.getElementById("btnCalcularImposto");

// Pega o parágrafo onde o resultado será exibido.
const resultadoCalculo = document.getElementById("resultadoCalculo");


// 2. Criando uma função auxiliar para imprimir na tela (melhora a organização):
// Esta função simples pega um 'texto' e o coloca dentro do parágrafo de resultado.
// Usamos 'innerHTML' aqui para que as tags <br> (quebras de linha) funcionem e o texto fique formatado.
const imprimirNaTela = (texto) => {
    resultadoCalculo.innerHTML = texto;
};


// 3. Adicionando um "ouvinte de evento" ao botão:
// Quando o botão 'btnCalcularImposto' é clicado, esta função é executada.
btnCalcularImposto.addEventListener("click", () => {
    // Pega os valores digitados pelo usuário.
    // 'value' retorna strings, e 'parseFloat()' é melhor para números com casas decimais.
    const valorCompra = parseFloat(valorCompraInput.value);
    const porcentagemImposto = parseFloat(porcentagemImpostoInput.value);

    // Verifica se os valores são números válidos e positivos.
    if (isNaN(valorCompra) || isNaN(porcentagemImposto) || valorCompra < 0 || porcentagemImposto < 0) {
        // Se a entrada for inválida, exibe uma mensagem de erro.
        imprimirNaTela("Por favor, digite valores numéricos positivos e válidos para a compra e o imposto!");
    } else {
        // Se a entrada for válida, chama a função 'exibirValorTotalComImposto'
        // para fazer os cálculos e mostrar o resultado na tela.
        exibirValorTotalComImposto(valorCompra, porcentagemImposto);
    }
});