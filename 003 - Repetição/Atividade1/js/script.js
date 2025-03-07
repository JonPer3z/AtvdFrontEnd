function resultado(){
    const element = document.getElementById("inputNumber")

    if(element instanceof HTMLInputElement){
        const number = parseFloat(element.value);

        if (!isNaN(number)){
            for(let i = 0; i <= 10; i++){
                const res = number * i
                console.log(`O Resultado das multiplicações por ${i}: resultado em ${res}`);
            }
        }
        else{
            alert("Digite um valor válido como 10 ou 1.5");
        }
    }
    else{
        alert("Tente novamente");
    }
}