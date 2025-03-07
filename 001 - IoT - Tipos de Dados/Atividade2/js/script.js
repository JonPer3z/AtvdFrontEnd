function calcularArea() {
        //prettier-ignore
    let baseMaior = parseFloat(prompt("Digite o valor da base maior do trapézio:"));
    let baseMenor = parseFloat(prompt("Digite o valor da base menor do trapézio"));
    let altura = parseFloat(prompt("Digite o valor da altura do trapézio"));

    if(!isNaN(baseMaior) && !isNaN(baseMenor) && !isNaN(altura)){
        const area = ((baseMaior + baseMenor) * altura) / 2;  

        exibirResultado("baseMaior", `O valor da base maior digitado foi: ${baseMaior}`);
        exibirResultado("baseMenor", `O valor da base menor digitado foi: ${baseMenor}`);
        exibirResultado("altura", `O valor da alutura digitado foi: ${altura}`);
        exibirResultado("area", `O valor da área é : ${area}`);
    }

    else{
        alert("Por favor, digite um número válido (ex: 10, 15.3).");
    }
}

function exibirResultado(elementId,mensagem){
    document.getElementById(elementId).textContent = mensagem;
}