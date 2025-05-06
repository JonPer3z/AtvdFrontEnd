function verificarNúmero() {
    let numberInput = document.getElementById("number");

    if (numberInput instanceof HTMLInputElement) {
        let number = String(numberInput.value);

        inverterNumber(number);

    } else {
        alert("Erro tente novamente!")
    }
}

function inverterNumber(number){
    let numberInvertido = number.toString().split('').reverse().join('');

    imprimir(numberInvertido);
}

function imprimir(numberInvertido){
    document.getElementById("output").innerText = numberInvertido;
}
