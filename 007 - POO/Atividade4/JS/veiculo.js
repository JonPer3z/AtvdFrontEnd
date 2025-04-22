// Classe Veiculo para representar um veículo no estacionamento
class Veiculo {
    constructor(placa, modelo, tempoPermanencia) {
        // Usa setters para inicializar com validações
        this.setPlaca(placa);
        this.setModelo(modelo);
        this.setTempoPermanencia(tempoPermanencia);
    }

    // Getter para placa
    getPlaca() {
        return this._placa;
    }

    // Setter para placa
    setPlaca(placa) {
        // Valida se a placa é uma string não vazia
        if (placa && typeof placa === "string" && placa.trim() !== "") {
            this._placa = placa.trim().toUpperCase(); // Normaliza para maiúsculas
        } else {
            throw new Error("Placa inválida!");
        }
    }

    // Getter para modelo
    getModelo() {
        return this._modelo;
    }

    // Setter para modelo
    setModelo(modelo) {
        // Valida se o modelo é uma string não vazia
        if (modelo && typeof modelo === "string" && modelo.trim() !== "") {
            this._modelo = modelo.trim();
        } else {
            throw new Error("Modelo inválido!");
        }
    }

    // Getter para tempo de permanência
    getTempoPermanencia() {
        return this._tempoPermanencia;
    }

    // Setter para tempo de permanência
    setTempoPermanencia(tempo) {
        // Valida se o tempo é um número não negativo
        if (typeof tempo === "number" && tempo >= 0) {
            this._tempoPermanencia = parseFloat(tempo.toFixed(1)); // Arredonda para 1 casa
        } else {
            throw new Error("Tempo de permanência deve ser um número não negativo!");
        }
    }

    // Método para calcular o valor a pagar (R$5 por hora)
    calcularValor() {
        const valorPorHora = 5;
        // Calcula o valor arredondando o tempo para cima (ex.: 1.1h conta como 2h)
        const horas = Math.ceil(this.getTempoPermanencia());
        return (horas * valorPorHora).toFixed(2);
    }
}