function exibirTriangulo() {
    let linhas = parseInt(document.getElementById("linhas").value);
    let triangulo = "";

    if (isNaN(linhas) || linhas <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido de linhas.";
        return;
    }

    for (let i = 1; i <= linhas; i++) {
        triangulo += "*".repeat(i) + "\n";
    }

    document.getElementById("resultado").textContent = triangulo;
}