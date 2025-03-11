// Lógiga esta errada, conferir lógica no Gemini

function exibirResultado() {
    const element1 = document.getElementById('number1');
    const element2 = document.getElementById('number2');
    let primos = [];
    let Nprimos = [];


    if ((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement)) {
        const number1 = parseFloat(element1.value);
        const number2 = parseFloat(element2.value);

        if (!isNaN(number1) && !isNaN(number2)) {

            for (let i = number1; i <= number2; i++) {

                if (i % 2 === 0) {
                    Nprimos.push(i);
                    imprimirResultado('Nprimos', `O números não primos são: ${Nprimosprimos}`);
                }
                else {
                    primos.push(i);
                    imprimirResultado('primos', `O números primos são: ${primos}`);
                }
            }

        }
        else {
            alert('Valor inválido, digite um valor válido ex. 10 ou 3.5')
        }
    }
    else {
        alert('Erro, tente novamente!')
    }
}

function imprimirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}