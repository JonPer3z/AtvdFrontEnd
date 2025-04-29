function configurar(){
    let numberInput = document.getElementById("number");

    if(numberInput instanceof HTMLInputElement){
        let number = numberInput.value
        verificarNumber(number);
    }
}

function verificarNumber(number){
    let array = [];
    array = number.split(',').map(Number)
    array.forEach(element => {
        console.log(typeof element)
    }); // verificar se cada elemento é um número
    let max = Math.max(...array);

    let min = Math.min(...array);
    exibirResultado(max,min);
}

function exibirResultado(max,min){
    document.getElementById("max").textContent = `O maior número é: ${max}`;
    document.getElementById("min").textContent = `O maior número é: ${min}`;
}