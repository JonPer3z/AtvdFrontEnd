export class Produto {
    #nome;
    #preco;
    #quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome; // Usa setters para validação
        this.preco = preco;
        this.quantidade = quantidade;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set nome(nome) {
        if (!nome || nome.trim() === '') {
            throw new Error("Erro: O nome do produto não pode ser vazio.");
        }
        this.#nome = nome;
    }

    set preco(preco) {
        if (isNaN(preco) || preco <= 0) {
            throw new Error("Erro: O preço deve ser maior que zero.");
        }
        this.#preco = preco;
    }

    set quantidade(quantidade) {
        if (!Number.isInteger(quantidade) || quantidade < 0) {
            throw new Error("Erro: A quantidade deve ser um número inteiro positivo.");
        }
        this.#quantidade = quantidade;
    }

    adicionarQuantidade(qtd) {
        if (!Number.isInteger(qtd) || qtd <= 0) {
            throw new Error("Erro: A quantidade deve ser um número inteiro positivo.");
        }
        this.#quantidade += qtd;
    }

    removerQuantidade(qtd) {
        if (!Number.isInteger(qtd) || qtd <= 0) {
            throw new Error("Erro: A quantidade deve ser um número inteiro positivo.");
        }
        if (qtd > this.#quantidade) {
            throw new Error("Erro: Quantidade insuficiente em estoque.");
        }
        this.#quantidade -= qtd;
    }
}