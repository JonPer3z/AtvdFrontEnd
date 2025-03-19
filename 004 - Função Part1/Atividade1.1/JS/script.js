function exibirOperacao() {
    const element1 = document.getElementById("number1");
    const element2 = document.getElementById("number2");
    let pegarIndex = document.querySelector("#escolhaOperacao");

    if ((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement) && (pegarIndex instanceof HTMLSelectElement)) {
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);
        pegarIndex = pegarIndex.selectedIndex;

        switch (pegarIndex) {
            case 0:
                soma(number1, number2, exibirResultado);
                break;
            case 1:
                subratracao(number1, number2, exibirResultado);
                break;
            case 2:
                divisao(number1, number2, exibirResultado);
                break;
            case 3:
                multiplicacao(number1, number2, exibirResultado);
                break;
            case 4:
                raiz(number1, exibirResultado);
                break;
            case 5:
                potencia(number1,  number2, exibirResultado);
                break;
        }
    } else {
        alert("Erro, tente novamente.");
    }
}

const soma = (number1, number2, exibirResultado) => {
    exibirResultado(number1 + number2);
};

const subratracao = (number1, number2, exibirResultado) => {
    exibirResultado(number1 - number2);
};

const divisao = (number1, number2, exibirResultado) => {
    exibirResultado(number1 / number2);
};

const multiplicacao = (number1, number2, exibirResultado) => {
    exibirResultado(number1 * number2);
};

const raiz = (number1, exibirResultado) => {
    exibirResultado(Math.sqrt(number1));
};

const potencia = (number1, number2, exibirResultado) => {
    exibirResultado(number1 ** number2);
};

function exibirResultado(resultado) {
    document.getElementById("output").innerText = `Resultado: ${resultado}`;
}