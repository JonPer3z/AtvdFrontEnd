// 3. Escreva uma função de seta chamada verificarPar que recebe um número e
// retorna “O número Par” se o número for par e “O número Impar” caso contrário.

// A função de seta (arrow function) para verificar se um número é par ou ímpar.
const verificarPar = (numero) => {
    if (numero % 2 === 0) {
        return "O número Par";
    } else {
        return "O número Impar";
    }
};

// --- Funções para Interagir com o HTML ---

// Pega o elemento input (onde o usuário vai digitar) usando seu ID.
const numeroInput = document.getElementById("numeroInput");

// Pega o elemento botão (onde o usuário vai clicar) usando seu ID.
const btnVerificar = document.getElementById("btnVerificar");

// Pega o parágrafo onde o resultado será exibido na página.
const resultadoParagrafo = document.getElementById("resultado");

// NOVA FUNÇÃO: Uma função para imprimir qualquer mensagem na tela (no parágrafo de resultado).
// Esta função recebe um 'texto' como argumento.
const imprimirNaTela = (texto) => {
    // Define o conteúdo de texto do parágrafo de resultado com a mensagem recebida.
    resultadoParagrafo.textContent = texto;
};


// Adicionando um "ouvinte de evento" ao botão:
btnVerificar.addEventListener("click", () => {
    const valorDigitado = numeroInput.value;
    const numeroConvertido = parseInt(valorDigitado);

    // Verificando se a conversão foi bem-sucedida e se é um número válido.
    if (isNaN(numeroConvertido)) {
        // Se não for um número válido, chamamos a função 'imprimirNaTela'
        // para exibir a mensagem de erro.
        imprimirNaTela("Por favor, digite um número válido!");
    } else {
        // Se for um número válido, chamamos a função 'verificarPar' para obter o resultado.
        const resultadoDaFuncao = verificarPar(numeroConvertido);
        
        // Em vez de 'resultadoParagrafo.textContent = resultadoDaFuncao;',
        // agora usamos a nossa nova função 'imprimirNaTela'.
        imprimirNaTela(resultadoDaFuncao);
    }
});