// --- EXERCÍCIO: Gerenciador de Produtos com Filtros e Remoção ---

// 1. Array principal para armazenar todos os produtos.
// Cada produto será um OBJETO com as propriedades: nome, preco e categoria.
let produtos = [];

// 2. Array para armazenar os produtos que estão sendo exibidos após a filtragem.
// Isso é útil para saber quais itens devem ser removidos ao clicar no botão "Remover Itens Filtrados".
let produtosFiltradosAtualmente = [];


// --- Funções Auxiliares para Manipulação do DOM (HTML) ---

// Função para obter um elemento HTML pelo seu ID.
const getElement = (id) => document.getElementById(id);

// Pega os elementos HTML do formulário de cadastro.
const nomeProdutoInput = getElement("nomeProduto");
const precoProdutoInput = getElement("precoProduto");
const categoriaProdutoInput = getElement("categoriaProduto");
const btnAdicionarProduto = getElement("btnAdicionarProduto");

// Pega os elementos HTML das listas de exibição.
const listaProdutosDiv = getElement("listaProdutos");
const listaProdutosFiltradosDiv = getElement("listaProdutosFiltrados");

// Pega os elementos HTML dos filtros.
const filtroNomeInput = getElement("filtroNome");
const filtroCategoriaInput = getElement("filtroCategoria");
const btnAplicarFiltro = getElement("btnAplicarFiltro");
const btnRemoverFiltrados = getElement("btnRemoverFiltrados");


// Função para criar um item de produto no HTML para exibição.
// Recebe um objeto 'produto' e um booleano 'ehFiltrado' para controle visual/remoção.
const criarItemProdutoHTML = (produto, ehFiltrado = false) => {
    const itemDiv = document.createElement("div"); // Cria uma <div> para o item do produto
    itemDiv.classList.add("produto-item"); // Adiciona uma classe CSS para estilização

    // Adiciona o conteúdo do produto dentro da div.
    itemDiv.innerHTML = `
        <span><strong>${produto.nome}</strong> (R$ ${produto.preco.toFixed(2)}) - ${produto.categoria}</span>
    `;

    // Se o item estiver na lista de produtos principais (não filtrados), pode adicionar um botão de remoção individual.
    // (O exercício pede para remover os itens FILTRADOS, mas é bom ter a opção de remover individualmente também)
    if (!ehFiltrado) {
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "X";
        removerBtn.classList.add("remover-btn");
        // Adiciona um evento de clique para remover este item específico.
        removerBtn.addEventListener("click", () => removerProdutoIndividual(produto.nome));
        itemDiv.appendChild(removerBtn);
    }
    
    return itemDiv; // Retorna a div do item criada
};

// Função para exibir (renderizar) uma lista de produtos em um container HTML.
// Recebe o 'containerHTML' (onde os produtos serão exibidos) e um 'arrayDeProdutos'.
const exibirProdutos = (containerHTML, arrayDeProdutos, ehFiltrado = false) => {
    containerHTML.innerHTML = ""; // Limpa o conteúdo atual do container

    if (arrayDeProdutos.length === 0) {
        containerHTML.innerHTML = "<p>Nenhum produto para exibir.</p>";
        return;
    }

    // Para cada produto no array, cria seu HTML e adiciona ao container.
    arrayDeProdutos.forEach(produto => {
        const itemHTML = criarItemProdutoHTML(produto, ehFiltrado);
        containerHTML.appendChild(itemHTML);
    });
};


// --- Funções de Lógica do Negócio (Adicionar, Filtrar, Remover) ---

// Função para adicionar um novo produto ao array 'produtos'.
const adicionarProduto = () => {
    const nome = nomeProdutoInput.value.trim(); // Pega o valor do input e remove espaços extras
    const preco = parseFloat(precoProdutoInput.value); // Converte o preço para número
    const categoria = categoriaProdutoInput.value.trim(); // Pega a categoria

    // Validação simples dos inputs
    if (nome === "" || isNaN(preco) || preco <= 0 || categoria === "") {
        alert("Por favor, preencha todos os campos corretamente (preço deve ser um número positivo).");
        return; // Sai da função se a validação falhar
    }

    // Cria um novo objeto produto
    const novoProduto = { nome, preco, categoria };
    
    // Adiciona o novo produto ao array principal 'produtos'.
    produtos.push(novoProduto);

    // Limpa os campos do formulário após adicionar.
    nomeProdutoInput.value = "";
    precoProdutoInput.value = "";
    categoriaProdutoInput.value = "";

    // Atualiza a exibição de todas as listas.
    atualizarExibicoes();
};


// Função para aplicar os filtros e exibir produtos filtrados.
const aplicarFiltros = () => {
    const termoNome = filtroNomeInput.value.trim().toLowerCase(); // Termo de busca por nome (minúsculas)
    const termoCategoria = filtroCategoriaInput.value.trim().toLowerCase(); // Termo de busca por categoria (minúsculas)

    // Filtra o array 'produtos' com base nos termos de busca.
    produtosFiltradosAtualmente = produtos.filter(produto => {
        const nomeCorresponde = produto.nome.toLowerCase().includes(termoNome);
        const categoriaCorresponde = produto.categoria.toLowerCase().includes(termoCategoria);

        // Retorna true se o nome do produto incluir o termo do filtro de nome (se houver)
        // E se a categoria do produto incluir o termo do filtro de categoria (se houver).
        // Se um filtro estiver vazio, ele sempre corresponde (true).
        return nomeCorresponde && categoriaCorresponde;
    });

    // Exibe os produtos filtrados na área específica.
    exibirProdutos(listaProdutosFiltradosDiv, produtosFiltradosAtualmente, true);
};


// Função para remover individualmente um produto (usada pelos botões 'X' na lista principal).
const removerProdutoIndividual = (nomeProdutoParaRemover) => {
    // Cria um NOVO array 'produtos' apenas com os produtos que NÃO têm o nome a ser removido.
    produtos = produtos.filter(produto => produto.nome !== nomeProdutoParaRemover);
    atualizarExibicoes(); // Atualiza todas as listas após a remoção.
};


// Função para remover TODOS os produtos que estão visíveis na lista de filtrados.
const removerItensFiltrados = () => {
    if (produtosFiltradosAtualmente.length === 0) {
        alert("Não há itens filtrados para remover.");
        return;
    }

    // Cria um conjunto (Set) dos nomes dos produtos a serem removidos para busca rápida.
    // Usar Set é eficiente para verificar se um item existe.
    const nomesParaRemover = new Set(produtosFiltradosAtualmente.map(produto => produto.nome));

    // Filtra o array principal 'produtos', mantendo apenas os produtos cujos nomes
    // NÃO ESTÃO no conjunto de nomes a serem removidos.
    produtos = produtos.filter(produto => !nomesParaRemover.has(produto.nome));

    // Limpa o array de produtos filtrados atualmente, pois eles foram removidos do array principal.
    produtosFiltradosAtualmente = [];

    // Atualiza a exibição de todas as listas.
    atualizarExibicoes();
    
    // Limpa os campos de filtro e a lista de produtos filtrados.
    filtroNomeInput.value = "";
    filtroCategoriaInput.value = "";
    listaProdutosFiltradosDiv.innerHTML = "<p>Use os filtros acima para ver os produtos aqui.</p>";
};


// Função para atualizar as duas listas (todos os produtos e produtos filtrados).
const atualizarExibicoes = () => {
    exibirProdutos(listaProdutosDiv, produtos); // Exibe todos os produtos
    aplicarFiltros(); // Re-aplica os filtros para atualizar a lista filtrada também
};


// --- Configuração dos Event Listeners (Ouvintes de Eventos) ---

// Adiciona um evento de clique ao botão "Adicionar Produto".
btnAdicionarProduto.addEventListener("click", adicionarProduto);

// Adiciona um evento de clique ao botão "Aplicar Filtros".
btnAplicarFiltro.addEventListener("click", aplicarFiltros);

// Adiciona um evento de clique ao botão "Remover Itens Filtrados".
btnRemoverFiltrados.addEventListener("click", removerItensFiltrados);


// --- Inicialização ---
// Chama a função de atualização para exibir as listas vazias (ou com dados iniciais)
// quando a página é carregada.
atualizarExibicoes();