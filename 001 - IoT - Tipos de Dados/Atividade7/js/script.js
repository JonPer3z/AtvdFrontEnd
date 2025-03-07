function calcularDesconto() {
    
    const produtoSelecionado = document.getElementById('produto').value;
    const descontoSelecionado = document.getElementById('desconto').value;
  
   
    const valorProduto = parseFloat(produtoSelecionado);
    const percentualDesconto = parseFloat(descontoSelecionado) / 100;
  
    
    const valorDesconto = valorProduto * percentualDesconto;
    const valorFinal = valorProduto - valorDesconto;
  

    document.getElementById('resultado').textContent = `O valor final é R$ ${valorFinal}`;
  }