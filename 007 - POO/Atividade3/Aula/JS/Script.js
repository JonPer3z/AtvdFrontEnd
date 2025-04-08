import { Produto } from "./Produto.js";
import { Gerenciador } from "./Gerenciador.js";

const gerenciador = new Gerenciador();

const nomeInput = document.getElementById("nomeInput");
const precoInput = document.getElementById("precoInput");
const quantidadeInput = document.getElementById("quantidadeInput");
const btnAdicionar = document.getElementById("adicionarProduto");
const btnRemover = document.getElementById("removerProduto");
const btnValorEstoque = document.getElementById("valorEstoque");
const btnListarProdutos = document.getElementById("listarProdutos");
const resultado = document.getElementById("resultado");
const listaProdutos = document.getElementById("listaProdutos");
const finalizarCompra = document.getElementById("finalizarCompra");


btnAdicionar.addEventListener("click", () => {
    try {
        const nome = nomeInput.value.trim();
        const preco = parseFloat(precoInput.value);
        const quantidade = parseInt(quantidadeInput.value);

        const novoProduto = new Produto(nome, preco, quantidade);
        gerenciador.adicionarProduto(novoProduto);

        resultado.textContent = `Produto "${nome}" adicionado ao carrinho  com sucesso!`;
        limparCampos();
        listarProdutosNaTela();
    } catch (error) {
        resultado.textContent = error.message;
    }
});

btnRemover.addEventListener("click", () => {
    try {
        const nome = nomeInput.value.trim();
        if (!nome) throw new Error("Erro: Digite o nome do produto para remover.");

        gerenciador.removerProduto(nome);
        resultado.textContent = `Produto "${nome}" removido do carrinho.`;
        limparCampos();
        listarProdutosNaTela();
    } catch (error) {
        resultado.textContent = error.message;
    }
});

btnValorEstoque.addEventListener("click", () => {
    const valorTotal = gerenciador.calcularValorTotal();
    if (gerenciador.listarProdutos().length === 0) {
        resultado.textContent = "Carrinho vazio.";
    } else {
        resultado.textContent = `Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`;
    }
});


btnListarProdutos.addEventListener("click", listarProdutosNaTela);

function listarProdutosNaTela() {
    listaProdutos.innerHTML = "";
    const produtos = gerenciador.listarProdutos();

    if (produtos.length === 0) {
        listaProdutos.innerHTML = "<li>Carrinho vazio.</li>";
        return;
    }

    produtos.forEach(produto => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`;
        listaProdutos.appendChild(li);
    });
}

finalizarCompra.addEventListener("click", () => {
    const finalizarCompra =  gerenciador.calcularValorTotal();
    if (finalizarCompra === 0){
        alert("Erro, carrinho vazio");
    }else{
        alert(`Compra finalizada no valor ${finalizarCompra.toFixed(2)}`);
        gerenciador.limparArray(); 
        listaProdutos.innerHTML = "";
        resultado.textContent = "";
    }

})

function limparCampos() {
    nomeInput.value = "";
    precoInput.value = "";
    quantidadeInput.value = "";
}