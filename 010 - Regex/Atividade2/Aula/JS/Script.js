function verificar() {
    let RGInput = document.getElementById("RG");
    let CPFInput = document.getElementById("CPF");
    const output = document.getElementById("output");
    const output2 = document.getElementById("output2");

    if ((RGInput instanceof HTMLInputElement) && (CPFInput instanceof HTMLInputElement) && 
        (output instanceof HTMLParagraphElement) && (output2 instanceof HTMLParagraphElement)) {
        
        const RG = RGInput.value;
        const CPF = CPFInput.value;

        const regexRG = /^\d{2}\.\d{3}\.\d{3}-\d$/;
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        const resultadoRG = regexRG.test(RG);
        const resultadoCPF = regexCPF.test(CPF);

        exibirResultado("output", `O RG digitado foi: ${RG}. Resultado: ${resultadoRG ? "Válido": "Inválido"}`);
        exibirResultado("output2", `O CPF digitado foi: ${CPF}. Resultado: ${resultadoCPF ? "Válido": "Inválido"}`);
    }
}

function exibirResultado(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}
