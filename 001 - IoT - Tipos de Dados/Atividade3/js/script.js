function calcularTemperatura(){
    let tempDigitada = parseFloat(prompt("Digite a temperatura em celsius"));

    if(!isNaN(tempDigitada)){
        let celsius = tempDigitada;
        const Fahrenheit = (tempDigitada * 9/5)+32;
        const Kelvin = tempDigitada + 273.15; 

        exibirResultado("tempCelsius", `A temperatura nem Celsius digitada foi: ${celsius}`); 
        exibirResultado("tempFahrenheit", `A temperatura em Fahrenheit é: ${Fahrenheit}`);
        exibirResultado("tempKelvin", `A tempertura em Kelvin é: ${Kelvin}`);
    }

    else{
        alert("Por favor, digite um número válido (ex: 10, 15.3).");
    }
}

function exibirResultado(elementId,mensagem){
    document.getElementById(elementId).textContent = mensagem
}