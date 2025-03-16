function calculoMedia() {
    let nota;
    let media;
    let listNotas = [];

    while (true) {
        nota = parseFloat(prompt("Digite sua nota, caso deseje parar digite um valor negativo ou maior que dez"));

        if (nota < 0 || nota > 10 || isNaN(nota)) {
            break;
        }

        listNotas.push(nota);
    }
        if(listNotas.length === 0){
            imprimirResultado('output', "Nenhuma nota inserida");
            return;
        }

        media = calcularMedia(listNotas);
        imprimirResultado('output', ` O valor da média das notas digitadas são: ${media}`);
}

function calcularMedia(listNotas) {
    if (listNotas.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < listNotas.length; i++) {
        soma += listNotas[i]
    }

    return soma / listNotas.length;
}

function imprimirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}