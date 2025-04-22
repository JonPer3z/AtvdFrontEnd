function configurar() {
    let numberInput = document.getElementById('idade');
    let btnCalcularIdade = document.getElementById("calcularIdade");

    if ((numberInput instanceof HTMLInputElement) && (btnCalcularIdade instanceof HTMLButtonElement)) {
        btnCalcularIdade.addEventListener("click", () => {
            let number = parseInt(numberInput.value);
            verificarNumero(number);
        })
    }
}

function exibirConteudo() {
    let saida = document.getElementById("saida");
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = "Acesso liberado";
    }
}

function exibirErro(mensagem) {
    let saida = document.getElementById('saida');
    if (saida instanceof HTMLParagraphElement) { 
        saida.textContent = 'Erro: ' + mensagem;
    }
}

function verificarNumero(number) {
    try {
        if (isNaN(number)) {
            throw new Error("Digite um número válido, como 10 ou 3");
        }
        if (number < 0) {
            throw new Error("Idade inválida. Digite uma idade maior que 0.");
        }
        if (number < 18) {
            throw new Error("Você precisa ser maior que 18 anos, para ter acesso.");
        }
        exibirConteudo();  
    } catch (Error) {
        exibirErro(Error.message);  
    }
}

document.addEventListener('DOMContentLoaded', configurar);
