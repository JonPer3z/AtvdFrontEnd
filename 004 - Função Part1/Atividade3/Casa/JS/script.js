function manipular(){
    let textInput = document.getElementById('text');

    if(textInput instanceof HTMLInputElement){
        text = textInput.value;
        transformar(text);
    }
}

function transformar(text){
    textManipulado = text.toUpperCase();
    imprimir(textManipulado);
}

function imprimir(textManipulado){
    document.getElementById('output').innerText = textManipulado;
}