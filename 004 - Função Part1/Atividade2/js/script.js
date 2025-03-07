const exponencial = (number1, number2, exibirResultado) => {
    const resultado = number1 ** number2;
    exibirResultado(resultado, null); 
}

const raiz = (number1, exibirResultado) => {
    const resultadoRaiz = Math.sqrt(number1);
    exibirResultado(null, resultadoRaiz); 
}

function calcularResultado(){
    const element1 = document.getElementById("inputNumber");
    const element2 = document.getElementById("inputIndex");

    if (element1 instanceof HTMLInputElement && element2 instanceof HTMLInputElement){
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);

        exponencial(number1, number2, exibirResultado);
        raiz(number1, exibirResultado);
    }
}

function exibirResultado(resultado, resultadoRaiz) {
    if (resultado !== null) {
        document.getElementById('res').innerHTML = `Resultado da exponenciação: ${resultado}`;
    }
    if (resultadoRaiz !== null) {
        document.getElementById('res1').innerHTML = `Resultado da raiz quadrada: ${resultadoRaiz}`;
    }
}