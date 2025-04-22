function configurar() {
    let nomeInput = document.getElementById("nome");
    let idadeInput = document.getElementById("idade");
    let valorInput = document.getElementById("valor");
    let btnVerificar = document.getElementById("btnVerificar");

    if ((nomeInput instanceof HTMLInputElement) && (idadeInput instanceof HTMLInputElement) && (valorInput instanceof HTMLInputElement) && (btnVerificar instanceof HTMLButtonElement)) {
        btnVerificar.addEventListener("click", () => {
            let nome = nomeInput.value.trim();
            let idade = parseInt(idadeInput.value);
            let valor = parseFloat(valorInput.value);
            verificarEmprestimo(nome, idade, valor);
        })
    }
}

function exibirConteudo() {
    let saida = document.getElementById("saida");
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = "Empréstimo liberado";
    }
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = 'Erro: ' + mensagem;
    }
}

function verificarEmprestimo(nome, idade, valor) {
    try {
        if (nome === '') {
            throw new Error("Digite seu nome.")
        }
        if (isNaN(idade)) {
            throw new Error("Digite uma idade válido, como 10 ou 3");
        }
        if (idade < 18 || idade > 70) {
            throw new Error("Idade não permitida para realizar empréstimo");
        }
        // if (valor <= 100 && valor > 30000){
        //     throw new Erros("Valor não permitido!")
        // }
        if (valor <= 100) {
            throw new Error("Valor insuficiente para empréstimo, solicar um valor superior á R$100,00 ");
        }
        if (valor > 30000) {
            throw new Error("O valor solicitado é superior ao permitido.");
        }
        exibirConteudo();
    } catch (Error) {
        exibirErro(Error.message);
    }
}

document.addEventListener("DOMContentLoaded", configurar);