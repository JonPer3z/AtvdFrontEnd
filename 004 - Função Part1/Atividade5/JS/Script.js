function iniciar(){
    let btnVerificar = document.getElementById("verificar");
    let textInput = document.getElementById("vogais");

    if((textInput instanceof HTMLInputElement) && (btnVerificar instanceof HTMLButtonElement) ){
        console.log('bbbb') // Nao esta entrando nessa função
        let text = String(textInput.value);
        btnVerificar.addEventListener('click',() => {
            console.log('aaaa')
            contarVogais(text);
            
        });
    }
}

function contarVogais(text){
    let frase = text.split('');
    console.log(frase);
    let vogais = 'aeiouáéíóúâêîôûãõàèìòù';
    let contador = 0;
    
}


document.addEventListener('DOMContentLoaded', iniciar);