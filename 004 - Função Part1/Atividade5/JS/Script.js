function configurar() {
    let btnVerificar = document.getElementById("verificar");
    let textInput = document.getElementById("vogais");


    if (textInput && btnVerificar) {
        btnVerificar.addEventListener('click', () => {
            let text = String(textInput.value);
            let qtdVogais = contarVogais(text);
            imprimirResultado(qtdVogais);
        });
    } else {
        console.error("Elementos do DOM não foram encontrados.");
    }
}

function contarVogais(text){
    let frase = text.toLowerCase().split('');
    let vogais = 'aeiouáéíóúâêîôûãõàèìòù';
    let contador = 0;

    frase.forEach(letra => {
        if(vogais.includes(letra)){
            contador++;
        }
    });
    return contador;
    // Não preciso chamar a função imprimir resultado, pois ela já foi chamada na função anterior
}

function imprimirResultado(qtdVogais){
    document.getElementById("output").innerHTML = `A frase possui ${qtdVogais} vogais`;
}

document.addEventListener('DOMContentLoaded', configurar);