// Classe GerenciadorPedidos para gerenciar a lógica dos pedidos
class GerenciadorPedidos {
    constructor() {
        this.produtos = []; // Array para armazenar os produtos
    }

    // Método para adicionar um produto ao pedido
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    // Método para calcular o total do pedido
    calcularTotal() {
        let total = 0;
        // Soma o subtotal de cada produto
        for (let produto of this.produtos) {
            total += parseFloat(produto.calcularSubtotal());
        }
        // Adiciona 10% ao total
        total *= 1.10;
        return total.toFixed(2);
    }

    // Método para listar os produtos
    listarProdutos() {
        let lista = "";
        // Cria uma string com todos os produtos
        for (let produto of this.produtos) {
            lista += `${produto.getQuantidade()}x ${produto.getNome()} - R$ ${produto.getPreco().toFixed(2)} cada<br>`;
        }
        return lista;
    }

    // Método para limpar o pedido
    limparPedido() {
        this.produtos = []; // Reseta o array de produtos
    }
}