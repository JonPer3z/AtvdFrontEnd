// Cria uma instância do GerenciadorEstacionamento
let gerenciador = new GerenciadorEstacionamento();

// Função para registrar um veículo
function registrarVeiculo() {
    const placa = document.getElementById("veiculo-placa").value;
    const modelo = document.getElementById("veiculo-modelo").value;
    const tempo = parseFloat(document.getElementById("veiculo-tempo").value);

    try {
        // Cria um novo veículo
        const veiculo = new Veiculo(placa, modelo, tempo);
        // Adiciona ao gerenciador
        gerenciador.adicionarVeiculo(veiculo);
        // Atualiza a lista na interface
        document.getElementById("lista-veiculos").innerHTML = gerenciador.listarVeiculos();
        // Limpa os campos
        document.getElementById("veiculo-placa").value = "";
        document.getElementById("veiculo-modelo").value = "";
        document.getElementById("veiculo-tempo").value = "";
    } catch (error) {
        alert(error.message);
    }
}

// Função para filtrar veículo por placa
function filtrarVeiculo() {
    const placa = document.getElementById("filtro-placa").value;

    if (placa && placa.trim() !== "") {
        const veiculo = gerenciador.filtrarPorPlaca(placa);
        if (veiculo) {
            // Exibe apenas o veículo filtrado
            document.getElementById("lista-veiculos").innerHTML =
                `Placa: ${veiculo.getPlaca()} | Modelo: ${veiculo.getModelo()} | Tempo: ${veiculo.getTempoPermanencia()}h | Valor: R$ ${veiculo.calcularValor()}`;
        } else {
            document.getElementById("lista-veiculos").innerHTML = "Veículo não encontrado.";
        }
    } else {
        // Se o campo estiver vazio, mostra todos os veículos
        document.getElementById("lista-veiculos").innerHTML = gerenciador.listarVeiculos();
    }
}

// Função para excluir veículo por placa
function excluirVeiculo() {
    const placa = document.getElementById("filtro-placa").value;

    if (placa && placa.trim() !== "") {
        const removido = gerenciador.removerVeiculo(placa);
        if (removido) {
            // Atualiza a lista na interface
            document.getElementById("lista-veiculos").innerHTML = gerenciador.listarVeiculos();
            document.getElementById("filtro-placa").value = "";
            alert("Veículo removido com sucesso!");
        } else {
            alert("Veículo não encontrado!");
        }
    } else {
        alert("Digite uma placa para excluir!");
    }
}