// --- EXERCÍCIO: Comparar Números e Encontrar o Maior ---

// 1. Crie uma função de seta chamada compararNumeros que recebe dois
// números e retorna true se o primeiro número for maior que o segundo, ou false
// caso contrário.

// Define a função de seta 'compararNumeros'.
// Recebe 'num1' (primeiro número) e 'num2' (segundo número) como parâmetros.
const compararNumeros = (num1, num2) => {
    // Retorna 'true' se 'num1' for estritamente maior que 'num2'.
    // Caso contrário, retorna 'false'.
    return num1 > num2;
};


// 2. Em seguida, crie outra função que recebe três números e usa a
// função compararNumeros para verificar qual deles é o maior.

// Define a função 'encontrarMaiorEntreTres'.
// Recebe 'n1', 'n2' e 'n3' como os três números a serem comparados.
function encontrarMaiorEntreTres(n1, n2, n3) {
    // Primeiro, vamos assumir que 'n1' é o maior número.
    let maior = n1;

    // Usamos a função 'compararNumeros' para verificar se 'n2' é maior que o 'maior' atual.
    // Se 'compararNumeros(n2, maior)' retornar 'true', significa que 'n2' é maior.
    if (compararNumeros(n2, maior)) {
        // Se 'n2' for maior, atualizamos a variável 'maior' para 'n2'.
        maior = n2;
    }

    // Agora, verificamos se 'n3' é maior que o 'maior' que temos até agora.
    // Se 'compararNumeros(n3, maior)' retornar 'true', significa que 'n3' é maior.
    if (compararNumeros(n3, maior)) {
        // Se 'n3' for maior, atualizamos a variável 'maior' para 'n3'.
        maior = n3;
    }

    // Após todas as comparações, a variável 'maior' conterá o maior valor entre os três números.
    return maior;
}


// --- Interação com o HTML para este exercício ---

// 1. Acessando os elementos HTML:
const numero1Input = document.getElementById("numero1Input");
const numero2Input = document.getElementById("numero2Input");
const numero3Input = document.getElementById("numero3Input");
const btnEncontrarMaior = document.getElementById("btnEncontrarMaior");
const resultadoComparacao = document.getElementById("resultadoComparacao");


// 2. Criando uma função auxiliar para imprimir na tela:
const imprimirNaTela = (texto) => {
    resultadoComparacao.textContent = texto;
};


// 3. Adicionando um "ouvinte de evento" ao botão:
btnEncontrarMaior.addEventListener("click", () => {
    // Pega os valores digitados pelo usuário nos inputs.
    // Lembre-se: 'value' retorna STRING, precisamos converter para NUMBER.
    const valor1Digitado = numero1Input.value;
    const valor2Digitado = numero2Input.value;
    const valor3Digitado = numero3Input.value;

    // Converte as strings para números inteiros.
    const num1 = parseInt(valor1Digitado);
    const num2 = parseInt(valor2Digitado);
    const num3 = parseInt(valor3Digitado);

    // Verifica se TODOS os valores digitados são números válidos.
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        // Se algum não for número, exibe mensagem de erro.
        imprimirNaTela("Por favor, digite números válidos em todos os campos!");
    } else {
        // Se todos forem números válidos:
        // Chama a função 'encontrarMaiorEntreTres' com os números convertidos.
        const maiorNumero = encontrarMaiorEntreTres(num1, num2, num3);
        
        // Exibe o resultado na tela.
        imprimirNaTela(`O maior número entre ${num1}, ${num2} e ${num3} é: ${maiorNumero}`);
    }
});