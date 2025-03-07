function verificarNumero(){
    const elemento = document.getElementById('verficacao')

    if(elemento instanceof HTMLInputElement){
        const number = parseFloat(elemento.value);

        if (!isNaN(number)){
            exibirResultado("numeroDigitado", `O número digitado foi: ${number}`);

            if(number === 0){
                exibirResultado("resultado", `O número digitado é igual a 0`);
            }
            else if(number < 0){
                exibirResultado("resultado",`O número digitado é NEGATIVO`);
            }
            else {
                exibirResultado("resultado", `O número digitado é POSITIVO`);
            }
        }
        else{
            alert("Por favor, digitar um valor válido como Ex. 10");
        }
    }
    else{
        alert("Erro a instancia do HTML")
    }
}

function exibirResultado(elementId,mensagem){
    document.getElementById(elementId).textContent = mensagem;
}