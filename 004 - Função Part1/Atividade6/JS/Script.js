function configurar() {
    let SelectionFiguras = document.getElementById("SelectionFiguras");
    let btnCalcular = document.getElementById("calcular");

    if ((SelectionFiguras instanceof HTMLSelectElement) && (btnCalcular instanceof HTMLButtonElement)) {
        btnCalcular.addEventListener('click', () => {
            const selectedValue = SelectionFiguras.value;

            switch (selectedValue) {
                case "1":
                    areaQuadrado(); 
                    break;
                case "2":
                    areaRetângulo();
                    break;
                case "3":
                    areaTrapezio(); 
                    break;
                case "4":
                    areaTriangulo(); 
                    break;
                case "5":
                    areaCirculo(); 
                    break;
            }
        });
    }
}

function areaQuadrado() {
    let l1 = Number(prompt("Digite o valor do lado do quadrado:"));
    if (l1 > 0) {
        let area = l1 * l1; 
        imprimirResultado(area);
    } else {
        alert("Digite um valor diferente de zero.");
    }
}

function areaRetângulo() {
    let l1 = Number(prompt("Digite o valor da largura do retângulo:")); 
    let l2 = Number(prompt("Digite o valor da altura do retângulo:")); 
    if (l1 > 0 && l2 > 0) {
        if (l1 === l2) {
            alert("Os valores inseridos são iguais, logo é um quadrado.");
        } else {
            let area = l1 * l2;
            imprimirResultado(area);
        }
    } else {
        alert("Digite um valor diferente de zero.");
    }
}

function areaTrapezio() {
    let b1 = Number(prompt("Digite o valor da base maior do trapézio:")); 
    let b2 = Number(prompt("Digite o valor da base menor do trapézio:")); 
    let h = Number(prompt("Digite o valor da altura do trapézio:")); 
    if (b1 > 0 && b2 > 0 && h > 0) {
        let area = (b1 + b2) * h / 2;
        imprimirResultado(area);
    } else {
        alert("Digite valores diferentes de zero.");
    }
}

function areaTriangulo() {
    let b = Number(prompt("Digite o valor da base do triângulo:")); 
    let h = Number(prompt("Digite o valor da altura do triângulo:")); 

    if (b > 0 && h > 0) {
        let area = b * h / 2;
        imprimirResultado(area);
    } else {
        alert("Digite valores diferentes de zero.");
    }
}

function areaCirculo() {
    let r = Number(prompt("Digite o valor do raio do círculo:")); 

    if (r > 0) {
        let area = Math.PI * Math.pow(r, 2);
        imprimirResultado(area);
    } else {
        alert("Digite um valor diferente de zero.");
    }
}

function imprimirResultado(area) {
    document.getElementById("output").innerHTML = `A área da figura que escolheu é: ${area.toFixed(2)}`; 
}

document.addEventListener('DOMContentLoaded', configurar);