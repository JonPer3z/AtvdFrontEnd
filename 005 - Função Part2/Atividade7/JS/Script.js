// --- EXERCÍCIO: Calcular Fatorial e Exibir ---

// 1. Crie uma função de seta para calcular o fatorial, a função deve receber um
// número inteiro e retorna o fatorial desse número.

// Define a função de seta 'calcularFatorial'.
// Ela recebe um 'numero' inteiro como parâmetro.
const calcularFatorial = (numero) => {
    // Por definição, o fatorial de 0 é 1 e o fatorial de 1 é 1.
    if (numero === 0 || numero === 1) {
        return 1;
    }

    // Se o número for negativo, o fatorial não é definido para números inteiros.
    // Podemos retornar uma mensagem de erro ou um valor especial como -1.
    if (numero < 0) {
        return "Número negativo não possui fatorial para inteiros.";
    }

    // Inicializa a variável 'fatorial' com 1.
    // Ela vai armazenar o resultado da multiplicação.
    let fatorial = 1;

    // Loop 'for' para multiplicar o número por todos os seus antecessores até 1.
    // O loop começa do 'numero' e vai decrementando 'i' a cada passo, até 'i' ser 1.
    for (let i = numero; i >= 1; i--) {
        // Multiplica o 'fatorial' atual pelo valor de 'i' e armazena o resultado em 'fatorial'.
        fatorial = fatorial * i; // Ou de forma abreviada: fatorial *= i;
    }

    // Retorna o valor final do fatorial.
    return fatorial;
};


// 2. Em seguida, crie outra função que recebe um número e exibe o valor do fatorial
// utilizando a função fatorial.

// Define a função 'exibirFatorialNaTela'.
// Ela recebe o 'numero' digitado pelo usuário.
function exibirFatorialNaTela(numero) {
    // Chama a função 'calcularFatorial' para obter o resultado do fatorial.
    const resultadoFatorial = calcularFatorial(numero);

    // Verifica se o resultado é uma string (indicando erro para número negativo).
    if (typeof resultadoFatorial === 'string') {
        imprimirNaTela(resultadoFatorial); // Exibe a mensagem de erro diretamente.
    } else {
        // Se for um número, exibe o resultado formatado.
        const mensagem = `O fatorial de ${numero}! é: ${resultadoFatorial}`;
        imprimirNaTela(mensagem);
    }
}


// --- Interação com o HTML para este exercício ---

// 1. Acessando os elementos HTML:
const numeroFatorialInput = document.getElementById("numeroFatorialInput");
const btnCalcularFatorial = document.getElementById("btnCalcularFatorial");
const resultadoFatorial = document.getElementById("resultadoFatorial");


// 2. Criando uma função auxiliar para imprimir na tela:
const imprimirNaTela = (texto) => {
    resultadoFatorial.textContent = texto; // Usamos textContent pois não há tags HTML na saída
};


// 3. Adicionando um "ouvinte de evento" ao botão:
btnCalcularFatorial.addEventListener("click", () => {
    // Pega o valor digitado pelo usuário no input.
    const valorDigitado = numeroFatorialInput.value;

    // Converte a string para um número inteiro. 'parseInt' é ideal para fatoriais.
    const numeroConvertido = parseInt(valorDigitado);

    // Verifica se o valor digitado é um número inteiro válido.
    // isNaN: verifica se NÃO é um número.
    // !Number.isInteger(numeroConvertido): verifica se NÃO é um número inteiro (ex: 5.5).
    if (isNaN(numeroConvertido) || !Number.isInteger(numeroConvertido)) {
        imprimirNaTela("Por favor, digite um número inteiro válido!");
    } else {
        // Se a entrada for válida, chama a função para exibir o fatorial.
        exibirFatorialNaTela(numeroConvertido);
    }
});