function calculoTriangulo() {
    const lado1Input = document.getElementById('lado1');
    const lado2Input = document.getElementById('lado2');
    const lado3Input = document.getElementById('lado3');

    if (lado1Input instanceof HTMLInputElement && lado2Input instanceof HTMLInputElement && lado3Input instanceof HTMLInputElement) {
        const lado1 = parseFloat(lado1Input.value);
        const lado2 = parseFloat(lado2Input.value);
        const lado3 = parseFloat(lado3Input.value);

        if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
            exibirResultado("saida", `O valor do primeiro lado foi: ${lado1}. O valor do segundo lado foi: ${lado2}. E o valor do terceiro lado foi: ${lado3}`);

            if (lado1 === lado2 && lado2 === lado3) {
                exibirResultado("resultado", `Portanto o triangulo é EQUILÁTERO`);
            }

            else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                exibirResultado("resultado", `Portanto o triangulo é ISÓCELES`);
            }

            else {
                exibirResultado("resultado", `Portanto o triangulo é ESCALENO`);
            }
        }

        else {
            alert("Favor inserir um valor válido. Ex. 10 ou 2.5")
        }
    }
    else {
        alert("Erro, tente novamente.")
    }
}

function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}