// Classe GerenciadorEstacionamento para gerenciar os veículos
class GerenciadorEstacionamento {
    constructor() {
        this.veiculos = []; // Array para armazenar os veículos
    }

    // Método para adicionar um veículo
    adicionarVeiculo(veiculo) {
        // Verifica se já existe um veículo com a mesma placa
        if (this.veiculos.some(v => v.getPlaca() === veiculo.getPlaca())) {
            throw new Error("Já existe um veículo com essa placa!");
        }
        this.veiculos.push(veiculo);
    }

    // Método para remover um veículo por placa
    removerVeiculo(placa) {
        const index = this.veiculos.findIndex(veiculo => veiculo.getPlaca() === placa.toUpperCase());
        if (index !== -1) {
            this.veiculos.splice(index, 1);
            return true; // Sucesso
        }
        return false; // Não encontrado
    }

    // Método para filtrar veículos por placa
    filtrarPorPlaca(placa) {
        const veiculo = this.veiculos.find(veiculo => veiculo.getPlaca() === placa.toUpperCase());
        return veiculo || null; // Retorna o veículo ou null se não encontrado
    }

    // Método para listar todos os veículos
    listarVeiculos() {
        let lista = "";
        for (let veiculo of this.veiculos) {
            lista += `Placa: ${veiculo.getPlaca()} | Modelo: ${veiculo.getModelo()} | Tempo: ${veiculo.getTempoPermanencia()}h | Valor: R$ ${veiculo.calcularValor()}<br>`;
        }
        return lista || "Nenhum veículo registrado.";
    }
}