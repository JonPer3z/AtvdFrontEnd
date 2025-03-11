function VerificarNumeros(){
    const element1 = document.getElementById("value1");
    const element2 = document.getElementById("value2");

    let pares = 0;
    let impares = 0;

    if((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement)){
        const number1 = parseInt(element1.value); 
        const number2 = parseInt(element2.value); 

        if(!isNaN(number1) && !isNaN(number2)){
            if(number1 > number2){
                let temp = number1;
                number1 = number2;
                number2 = temp;
            }

            for(let i=number1; i<=number2; i++){
                if(i % 2 === 0){
                    pares++
                    exibirResultado('resultadoPares',`Pares: ${pares}`);
                }
                else{
                    impares++
                    exibirResultado('resultadoImpares', `Impares: ${impares}`);
                }
            }
        }
        else{
            alert("Erro, digite um número válido Ex. 10 ou 3");
        }
    }
    else{
        alert("Erro, tente novamente");
    }
}

function exibirResultado(elementId,mensagem){
    document.getElementById(elementId).innerText = mensagem;
} // Exibir resultado pares e impares