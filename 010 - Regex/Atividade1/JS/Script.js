function verificar(){
    let nameInput = document.getElementById('name');
    const RegexName = /^[A-Za-zÁ-ÿ]+( [A-Za-zÁ-ÿ]+)+$/

    if(nameInput instanceof HTMLInputElement){
        let name = nameInput.value;

        const resultadoName = RegexName.test(name);
        
        exibirResultado("output", `O nome digitado foi: ${name}. Resultado: ${resultadoName ? "Válido": "Inválido"}`);
     
    }
}
function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}