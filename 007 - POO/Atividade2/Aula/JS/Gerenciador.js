import { Produto } from "./Produto.js";

export class Gerenciador {
    #estoque = [];

    adicionarProduto(produto) {
        if (!(produto instanceof Produto)) {
            throw new Error("Erro: O item adicionado deve ser um Produto.");
        }

        const produtoExistente = this.#estoque.find(p => p.nome === produto.nome);
        if (produtoExistente) {
            throw new Error("Erro: Produto já existe no estoque.");
        }

        this.#estoque.push(produto);
    }

    removerProduto(nomeProduto) {
        const index = this.#estoque.findIndex(produto => produto.nome === nomeProduto);
        if (index === -1) {
            throw new Error("Erro: Produto não encontrado.");
        }
        this.#estoque.splice(index, 1);
    }

    listarProdutos() {
        return this.#estoque;
    }

    calcularValorTotal() {
        return this.#estoque.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    }
}