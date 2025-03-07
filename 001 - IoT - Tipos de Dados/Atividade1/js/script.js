function calcularNumero() {
    
    let numero = parseInt(prompt("Digite um número:"));

    
    if (!isNaN(numero)) {
       
        let antecessor = numero - 1;
        let sucessor = numero + 1;

        
        exibirResultado("SeuNumero", `O número digitado foi: ${numero}`);
        exibirResultado("Antecessor", `O antecessor é: ${antecessor}`);
        exibirResultado("Sucessor", `O sucessor é: ${sucessor}`);
    } else {
        
        alert("Por favor, digite um número válido (ex: 10).");
    }
}

function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).textContent = mensagem;
}