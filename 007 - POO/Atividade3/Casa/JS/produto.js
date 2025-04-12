// Classe Produto para representar um item do pedido
class Produto {
    constructor(nome, quantidade, preco) {
        // Usa os setters para inicializar os atributos com validação
        this.setNome(nome);
        this.setQuantidade(quantidade);
        this.setPreco(preco);
    }

    // Getter para nome
    getNome() {
        return this._nome; // Retorna o atributo privado
    }

    // Setter para nome
    setNome(nome) {
        // Valida se o nome não está vazio
        if (nome && typeof nome === "string" && nome.trim() !== "") {
            this._nome = nome.trim(); // Remove espaços extras
        } else {
            throw new Error("Nome do produto inválido!");
        }
    }

    // Getter para quantidade
    getQuantidade() {
        return this._quantidade;
    }

    // Setter para quantidade
    setQuantidade(quantidade) {
        // Valida se a quantidade é um número positivo
        if (typeof quantidade === "number" && quantidade > 0) {
            this._quantidade = Math.floor(quantidade); // Garante que seja inteiro
        } else {
            throw new Error("Quantidade deve ser um número positivo!");
        }
    }

    // Getter para preço
    getPreco() {
        return this._preco;
    }

    // Setter para preço
    setPreco(preco) {
        // Valida se o preço é um número não negativo
        if (typeof preco === "number" && preco >= 0) {
            this._preco = parseFloat(preco.toFixed(2)); // Arredonda para 2 casas
        } else {
            throw new Error("Preço deve ser um número não negativo!");
        }
    }

    // Método para calcular o subtotal do produto (quantidade * preço)
    calcularSubtotal() {
        return (this.getQuantidade() * this.getPreco()).toFixed(2);
    }
}