const configEvento = () => {
    let desconto = document.getElementById('desconto');
    let preco = document.getElementById('preco');
    let exibirResultado = document.getElementById('exibirResultado');

    if (exibirResultado instanceof HTMLButtonElement) {
        exibirResultado.addEventListener('click', () => {
            clickNoBotao(desconto, preco);
        })
    }
}

const clickNoBotao = (descontoInput, precoInput) => {
    if (
        descontoInput instanceof HTMLInputElement &&
        precoInput instanceof HTMLInputElement
    ) {

        let elementDesconto = Number(descontoInput.value);
        let elementPreco = Number(precoInput.value);

        if (!isNaN(elementDesconto) && !isNaN(elementPreco)) {
            let desconto = elementDesconto;
            let preco = elementPreco;
            let valorFinal;
            console.log(desconto, typeof desconto)

            desconto = desconto === 0 || null ? 0.1 : desconto / 100;

            valorFinal = preco - desconto * preco;

            resultado(valorFinal);

        } else {
            alert('Digite um valor válido Ex 10 ou 3.5');
        }
    } else {
        alert('Tente novamente!');
    }
}

const resultado = valorFinal => {
    let saida = document.getElementById('saida');

    saida.textContent = saida instanceof HTMLParagraphElement ? valorFinal : alert('Tente Novamente')
}

document.addEventListener('DOMContentLoaded', configEvento);
