// Cria uma instância do GerenciadorPedidos
let gerenciador = new GerenciadorPedidos();

// Função para adicionar um item
function adicionarItem() {
    let nome = document.getElementById("item-nome").value;
    let quantidade = parseInt(document.getElementById("item-quantidade").value);
    let preco = parseFloat(document.getElementById("item-preco").value);

    try {
        let produto = new Produto(nome, quantidade, preco);
        gerenciador.adicionarProduto(produto);
        // Atualiza a lista e o valor atual na interface
        document.getElementById("itens-pedido").innerHTML = gerenciador.listarProdutos();
        document.getElementById("total-pedido").innerText = gerenciador.calcularTotal();
        // Limpa os campos
        document.getElementById("item-nome").value = "";
        document.getElementById("item-quantidade").value = "";
        document.getElementById("item-preco").value = "";
    } catch (error) {
        alert(error.message);
    }
}

// Função para remover um item
function removerItem() {
    let nome = document.getElementById("remover-nome").value;

    if (nome && nome.trim() !== "") {
        // Tenta remover o produto
        const removido = gerenciador.removerProduto(nome);
        if (removido) {
            // Atualiza a lista e o valor atual na interface
            document.getElementById("itens-pedido").innerHTML = gerenciador.listarProdutos();
            document.getElementById("total-pedido").innerText = gerenciador.calcularTotal();
            document.getElementById("remover-nome").value = "";
            alert("Item removido com sucesso!");
        } else {
            alert("Item não encontrado!");
        }
    } else {
        alert("Digite o nome do item para remover!");
    }
}

// Função para finalizar o pedido
function finalizarPedido() {
    if (gerenciador.produtos.length > 0) {
        alert(`Pedido finalizado! Total: R$ ${gerenciador.calcularTotal()}`);
        gerenciador.limparPedido();
        // Atualiza a interface
        document.getElementById("itens-pedido").innerHTML = "";
        document.getElementById("total-pedido").innerText = "0.00";
    } else {
        alert("Adicione itens ao pedido antes de finalizar!");
    }
}