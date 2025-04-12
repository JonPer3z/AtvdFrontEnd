// Cria uma instância do GerenciadorPedidos
let gerenciador = new GerenciadorPedidos();

// Função para adicionar um item (chamada pelo botão no HTML)
function adicionarItem() {
    // Obtém os valores dos campos
    let nome = document.getElementById("item-nome").value;
    let quantidade = parseInt(document.getElementById("item-quantidade").value);
    let preco = parseFloat(document.getElementById("item-preco").value);

    try {
        // Cria um novo produto (os setters validarão os dados)
        let produto = new Produto(nome, quantidade, preco);
        // Adiciona ao gerenciador
        gerenciador.adicionarProduto(produto);
        // Atualiza a interface
        document.getElementById("itens-pedido").innerHTML = gerenciador.listarProdutos();
        document.getElementById("total-pedido").innerText = gerenciador.calcularTotal();
        // Limpa os campos
        document.getElementById("item-nome").value = "";
        document.getElementById("item-quantidade").value = "";
        document.getElementById("item-preco").value = "";
    } catch (error) {
        // Exibe mensagem de erro caso os setters rejeitem os valores
        alert(error.message);
    }
}

// Função para finalizar o pedido
function finalizarPedido() {
    // Verifica se há produtos
    if (gerenciador.produtos.length > 0) {
        alert(`Pedido finalizado! Total: R$ ${gerenciador.calcularTotal()}`);
        // Limpa o pedido
        gerenciador.limparPedido();
        // Atualiza a interface
        document.getElementById("itens-pedido").innerHTML = "";
        document.getElementById("total-pedido").innerText = "0.00";
    } else {
        alert("Adicione itens ao pedido antes de finalizar!");
    }
}