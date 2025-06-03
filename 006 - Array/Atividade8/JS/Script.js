// --- EXERCÍCIO: Gerenciador de Filmes com Cadastro e Filtros ---

// 1. Array principal para armazenar todos os filmes cadastrados.
// Cada filme será um OBJETO com as propriedades: titulo, ano e classificacao.
let filmes = [];


// --- Acesso aos Elementos HTML ---

// Função auxiliar para pegar um elemento HTML pelo seu ID de forma mais curta.
const getElement = (id) => document.getElementById(id);

// Elementos do formulário de cadastro
const tituloFilmeInput = getElement("tituloFilme");
const anoFilmeInput = getElement("anoFilme");
const classificacaoFilmeInput = getElement("classificacaoFilme");
const btnAdicionarFilme = getElement("btnAdicionarFilme");

// Elementos para exibição das listas de filmes
const listaFilmesDiv = getElement("listaFilmes");
const listaFilmesFiltradosDiv = getElement("listaFilmesFiltrados");

// Elementos dos campos e botões de filtro
const filtroClassificacaoInput = getElement("filtroClassificacao");
const btnFiltrarClassificacao = getElement("btnFiltrarClassificacao");
const filtroAnoInput = getElement("filtroAno");
const btnFiltrarAno = getElement("btnFiltrarAno");
const btnLimparFiltros = getElement("btnLimparFiltros");


// --- Funções para Manipular o HTML (DOM) ---

// Função para criar a representação HTML de um filme para exibição.
// Recebe um objeto 'filme'.
const criarItemFilmeHTML = (filme) => {
    const itemDiv = document.createElement("div"); // Cria uma <div> para o filme
    itemDiv.classList.add("filme-item"); // Adiciona uma classe CSS para estilização

    // Define o conteúdo HTML da div com as informações do filme.
    itemDiv.innerHTML = `
        <span><strong>${filme.titulo}</strong> (${filme.ano}) - Classificação: ${filme.classificacao} anos</span>
    `;
    
    return itemDiv; // Retorna o elemento HTML criado.
};

// Função para exibir uma lista de filmes em um container HTML.
// Recebe o 'containerHTML' (onde os filmes serão mostrados) e um 'arrayDeFilmes'.
const exibirFilmes = (containerHTML, arrayDeFilmes) => {
    containerHTML.innerHTML = ""; // Limpa o conteúdo atual do container (para não duplicar).

    if (arrayDeFilmes.length === 0) {
        containerHTML.innerHTML = "<p>Nenhum filme para exibir.</p>";
        return; // Sai da função se o array estiver vazio.
    }

    // Para cada filme no array, cria seu HTML e adiciona ao container.
    arrayDeFilmes.forEach(filme => {
        const itemHTML = criarItemFilmeHTML(filme);
        containerHTML.appendChild(itemHTML);
    });
};


// --- Funções de Lógica do Programa ---

// Função para adicionar um novo filme ao array 'filmes'.
const adicionarFilme = () => {
    // Pega os valores dos inputs e remove espaços extras (trim).
    const titulo = tituloFilmeInput.value.trim();
    // Converte ano e classificação para números inteiros.
    const ano = parseInt(anoFilmeInput.value);
    const classificacao = parseInt(classificacaoFilmeInput.value);

    // Validação de entrada: verifica se os campos não estão vazios e se os números são válidos.
    if (titulo === "" || isNaN(ano) || ano < 1900 || ano > 2100 || isNaN(classificacao) || classificacao < 0 || classificacao > 18) {
        alert("Por favor, preencha todos os campos corretamente: Título, Ano (entre 1900-2100) e Classificação (entre 0-18).");
        return; // Interrompe a função se a validação falhar.
    }

    // Cria um novo objeto representando o filme.
    const novoFilme = { titulo, ano, classificacao };
    
    // Adiciona o novo objeto filme ao array principal 'filmes'.
    filmes.push(novoFilme);

    // Limpa os campos do formulário para o próximo cadastro.
    tituloFilmeInput.value = "";
    anoFilmeInput.value = "";
    classificacaoFilmeInput.value = "";

    // Atualiza a exibição de todos os filmes.
    exibirTodosOsFilmes();
    // Limpa a lista de filtrados para começar de novo após o cadastro.
    listaFilmesFiltradosDiv.innerHTML = "<p>Use os filtros acima para ver os filmes aqui.</p>";
};

// Função para exibir todos os filmes na lista principal.
const exibirTodosOsFilmes = () => {
    exibirFilmes(listaFilmesDiv, filmes);
};

// Função para filtrar filmes por classificação indicativa.
// Exibe filmes cuja classificação é MAIOR OU IGUAL à classificação filtrada.
const filtrarPorClassificacao = () => {
    const classificacaoFiltro = parseInt(filtroClassificacaoInput.value);

    // Validação do filtro de classificação.
    if (isNaN(classificacaoFiltro) || classificacaoFiltro < 0 || classificacaoFiltro > 18) {
        alert("Por favor, digite uma classificação indicativa válida para o filtro (entre 0-18).");
        listaFilmesFiltradosDiv.innerHTML = "<p>Nenhum filtro aplicado ou inválido.</p>";
        return;
    }

    // Filtra o array 'filmes'.
    // O método 'filter' cria um NOVO array com os itens que passam no teste (função de callback).
    const filmesFiltrados = filmes.filter(filme => {
        // Retorna true se a classificação do filme for maior ou igual ao filtro digitado.
        return filme.classificacao >= classificacaoFiltro;
    });

    // Exibe os filmes resultantes do filtro na área de filmes filtrados.
    exibirFilmes(listaFilmesFiltradosDiv, filmesFiltrados);
};

// Função para filtrar filmes por ano de lançamento (exato).
const filtrarPorAno = () => {
    const anoFiltro = parseInt(filtroAnoInput.value);

    // Validação do filtro de ano.
    if (isNaN(anoFiltro) || anoFiltro < 1900 || anoFiltro > 2100) {
        alert("Por favor, digite um ano válido para o filtro (entre 1900-2100).");
        listaFilmesFiltradosDiv.innerHTML = "<p>Nenhum filtro aplicado ou inválido.</p>";
        return;
    }

    // Filtra o array 'filmes' para encontrar filmes com o ano exato.
    const filmesFiltrados = filmes.filter(filme => {
        // Retorna true se o ano do filme for exatamente igual ao ano do filtro.
        return filme.ano === anoFiltro;
    });

    // Exibe os filmes resultantes do filtro.
    exibirFilmes(listaFilmesFiltradosDiv, filmesFiltrados);
};

// Função para limpar os campos de filtro e a lista de filmes filtrados.
const limparFiltros = () => {
    filtroClassificacaoInput.value = ""; // Limpa o input de classificação
    filtroAnoInput.value = ""; // Limpa o input de ano
    listaFilmesFiltradosDiv.innerHTML = "<p>Use os filtros acima para ver os filmes aqui.</p>"; // Limpa a área de resultados
};


// --- Configuração dos Event Listeners (Ouvintes de Eventos) ---

// Adiciona um evento de clique ao botão "Adicionar Filme".
btnAdicionarFilme.addEventListener("click", adicionarFilme);

// Adiciona um evento de clique ao botão "Filtrar por Classificação".
btnFiltrarClassificacao.addEventListener("click", filtrarPorClassificacao);

// Adiciona um evento de clique ao botão "Filtrar por Ano".
btnFiltrarAno.addEventListener("click", filtrarPorAno);

// Adiciona um evento de clique ao botão "Limpar Filtros".
btnLimparFiltros.addEventListener("click", limparFiltros);


// --- Inicialização ---
// Chama a função para exibir todos os filmes quando a página é carregada (inicialmente vazia).
exibirTodosOsFilmes();