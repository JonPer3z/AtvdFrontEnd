function resultado() {
    const notaInput = document.getElementById('notaInput');


    if (notaInput instanceof HTMLInputElement) {
        const nota = parseFloat(notaInput.value);

        if (!isNaN(nota)) {
            exibirResultado("nota", `A nota inserida foi: ${nota}`)

            if (nota < 3) {
                exibirResultado("resultadoNota", `está REPROVADO`);
            }

            else if (nota === 3 || nota <= 5) {
                exibirResultado("resultadoNota", `está em RECUPERAÇÃO`);
            }
            else if (nota <= 10) {
                exibirResultado("resultadoNota", `está APROVADO`);
            }

            else {
                alert("Inserir uma nota inferior ou igual a 10");
            }

        }
        else {
            alert("Digite um valor válido. Ex: 10 ou 2.5")
        }
    }
    else {
        alert("Erro ao verificar elemente HTML, tente novamente.")

    }
}

function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}