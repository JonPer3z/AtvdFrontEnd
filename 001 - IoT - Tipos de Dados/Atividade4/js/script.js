function calcularArea(){
    let raio = parseFloat(prompt("Digite o valor do raio da circunferência")); 

    if(!isNaN(raio)){
        let area = Math.PI*(raio**2); 

        exibirResultado("valorRaio", `O valor do raio digitado foi: ${raio}`); 
        exibirResultado("valorArea", `O valor da área é: ${area}`);
    }

    else{
        alert("Por favor, digite um número válido (ex: 10, 15.3).");
    }
}

function exibirResultado(elementId,mensagem){
    document.getElementById(elementId).textContent = mensagem
}