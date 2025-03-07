function verificacaoEstacao() {
    const element = document.getElementById("estacao");

    if (element instanceof HTMLInputElement) {
        const number = parseInt(element.value);

        if (!isNaN(number)) {
            switch (number) {
                case 1:
                    exibirResultado("saida", `Primavera: A primavera é uma das quatro estações do ano, que ocorre entre o inverno e o verão. É conhecida como a "estação das flores". `);
                    break
                case 2:
                    exibirResultado("saida", `Verão: O verão é uma das quatro estações do ano, caracterizada por ser a estação mais quente. `);
                    break
                case 3:
                    exibirResultado("saida", `Outono: O outono é uma das quatro estações do ano, que marca a transição entre o verão e o inverno `);
                    break
                case 4:
                    exibirResultado("saida", `Inverno: O inverno é a estação mais fria das quatro estações do ano e é comum que durante esta época, em países mais perto dos polos, as temperaturas fiquem abaixo de 0 ºC`);
                    break
                case 5:
                    exibirResultado("saida", `Número inválido, ultilize números de 1 á 4`);
            }
        }
        else {
            alert("Insira somente números inteiros, ex 1")
        }
    }
    else {
        alert("Tente novamente.")
    }
}

function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}