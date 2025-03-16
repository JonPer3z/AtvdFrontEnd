function calculoVogais(){
    let element = document.getElementById('vogal');
    let frase;
    let letrasFrase;

    if(element instanceof HTMLInputElement){
        frase = element.value.toLocaleLowerCase();
        letrasFrase = frase.split("");
        let vogaisInfo = verificarVogais(letrasFrase);
        imprimirResultado('output', `Quantidade de vogais: ${vogaisInfo.contador} e foram elas ${vogaisInfo.vogais.join(', ')}`);
        
    }
}

function verificarVogais(letrasFrase){
    const vogais = ["a","e","i","o","u",]
    let contadorVogais = 0;
    let vogaisEncontradas = [];

    for(let letra of letrasFrase){
        if(vogais.includes(letra)){
            vogaisEncontradas.push(letra);
            contadorVogais++;
            
        }
    }
    return {contador: contadorVogais, vogais: vogaisEncontradas}; 
}

function imprimirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}