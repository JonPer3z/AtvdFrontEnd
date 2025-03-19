function calcular() {
    let element1 = document.getElementById("input1");
    let element2 = document.getElementById("input2");

    if ((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement)) {
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);

        exponenciacao(number1, number2, exibirResultado);
        raiz(number1, exibirResultado);
    }
}

const exponenciacao = (number1, number2, exibirResultado) => {
    exibirResultado(number1 ** number2);
}

const raiz = (number1, exibirResultado) => {
    let resultadoRaiz = Math.sqrt(number1)
    exibirResultado(null, resultadoRaiz);
}

function exibirResultado(resultado, resultadoRaiz) {
    if (resultado !== null) {
        document.getElementById('output1').innerHTML = `Resultado da exponenciação: ${resultado}`;
    }
    if (resultadoRaiz !== null) {
        document.getElementById('output2').innerHTML = `Resultado da raiz quadrada: ${resultadoRaiz}`;
    }
}