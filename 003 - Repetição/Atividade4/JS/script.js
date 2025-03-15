function exibirResultado() {
    const element1 = document.getElementById('number1');
    const element2 = document.getElementById('number2');
    let primos = [];
    let Nprimos = [];

    if ((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement)) {
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);

        if (!isNaN(number1) && !isNaN(number2)) {
            let inicio = Math.min(number1, number2);
            let fim = Math.max(number1, number2);

            for (let i = inicio; i <= fim; i++) { 
                if (verificarPrimo(i)) { 
                    primos.push(i);
                } else {
                    Nprimos.push(i);
                }
            }
            imprimirResultado('primos', `Número primos: ${primos.join(',')}`);
            imprimirResultado('nPrimos', `Número não primos: ${Nprimos.join(',')}`);
        } else {
            alert('Valor inválido, digite um valor válido ex. 10 ou 3.5');
        }
    } else {
        alert('Erro, tente novamente!');
    }
}

function imprimirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}

function verificarPrimo(numero) { 
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) { 
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}