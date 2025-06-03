// --- EXERCÍCIO: calcularQuadrado e aplicarOperacao ---

// 1. Crie uma função de seta chamada calcularQuadrado que recebe um número
// como parâmetro e retorna o quadrado desse número.

// Define a função de seta 'calcularQuadrado'.
// Ela recebe um 'numero' como entrada.
const calcularQuadrado = (numero) => {
    // Retorna o resultado da multiplicação do número por ele mesmo (o quadrado).
    return numero * numero;
};

// 2. Em seguida, crie uma função chamada aplicarOperacao que recebe um número
// e uma função como parâmetros e aplica a função ao número.

// Define a função 'aplicarOperacao'.
// - 'num': Este é o número que será processado.
// - 'operacaoFuncao': Este é o segundo parâmetro, e ele DEVE SER uma função.
//    Chamamos 'operacaoFuncao' de CALLBACK porque ela será chamada de volta (executada)
//    dentro de 'aplicarOperacao'.
function aplicarOperacao(num, operacaoFuncao) {
    // Aqui, 'aplicarOperacao' executa a 'operacaoFuncao' que foi passada a ela,
    // usando 'num' como argumento para essa função.
    // O resultado dessa execução é o que 'aplicarOperacao' retorna.
    return operacaoFuncao(num);
}


// --- Interação com o HTML para este exercício ---

// 1. Acessando os elementos HTML:
// Pega o campo de entrada de número do HTML usando seu ID.
const numeroInputOperacao = document.getElementById("numeroInputOperacao");

// Pega o botão do HTML usando seu ID.
const btnCalcularOperacao = document.getElementById("btnCalcularOperacao");

// Pega o parágrafo do HTML onde o resultado será exibido na página.
const resultadoOperacao = document.getElementById("resultadoOperacao");


// 2. Criando uma função auxiliar para imprimir na tela (melhora a organização):
// Esta função simples pega um 'texto' e o coloca dentro do parágrafo de resultado.
const imprimirNaTela = (texto) => {
    resultadoOperacao.textContent = texto;
};


// 3. Adicionando um "ouvinte de evento" ao botão:
// Quando o botão 'btnCalcularOperacao' é clicado, a função anônima (de seta) dentro do
// addEventListener será executada.
btnCalcularOperacao.addEventListener("click", () => {
    // Pega o valor atual digitado pelo usuário no input.
    // Importante: 'value' sempre retorna uma STRING!
    const valorDigitado = numeroInputOperacao.value;

    // Converte a STRING digitada para um número INTEIRO.
    // 'parseInt()' é usado para essa conversão.
    const numeroConvertido = parseInt(valorDigitado);

    // Verifica se o valor convertido é realmente um número válido.
    // 'isNaN()' (Is Not a Number) retorna 'true' se o valor NÃO for um número.
    if (isNaN(numeroConvertido)) {
        // Se não for um número válido, exibe uma mensagem de erro na página.
        imprimirNaTela("Por favor, digite um número válido para o cálculo!");
    } else {
        // Se a entrada for um número válido:
        // Chama a função 'aplicarOperacao'.
        // Passamos o 'numeroConvertido' (o número que o usuário digitou).
        // E passamos a função 'calcularQuadrado' como a 'callback'.
        // Note que passamos 'calcularQuadrado' sem parênteses, pois estamos passando a FUNÇÃO em si,
        // e não o resultado de uma execução dela.
        const resultadoDoQuadrado = aplicarOperacao(numeroConvertido, calcularQuadrado);
        
        // Exibe o resultado na tela usando a função auxiliar 'imprimirNaTela'.
        imprimirNaTela(`O quadrado de ${numeroConvertido} é: ${resultadoDoQuadrado}`);
    }
});