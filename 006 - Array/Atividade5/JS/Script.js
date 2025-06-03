// --- EXERCÍCIO: Dropdown de Frutas Dinâmico ---

// 1. Defina um array com as opções de frutas.
const frutas = ["Abacate", "Maçã", "Pera", "Laranja"];


// 2. Acesse os elementos HTML necessários.
// Pega o elemento <select> (o dropdown) usando seu ID.
const selectFrutas = document.getElementById("selectFrutas");

// Pega o parágrafo onde a fruta escolhida será exibida.
const frutaEscolhidaParagrafo = document.getElementById("frutaEscolhida");


// 3. Função para popular (preencher) o dropdown com as opções do array.
// Esta função é executada uma vez, quando a página carrega.
const popularDropdown = () => {
    // Percorre cada 'fruta' dentro do array 'frutas'.
    frutas.forEach(fruta => {
        // Cria um novo elemento <option> para cada fruta.
        const option = document.createElement("option");
        
        // Define o 'value' (valor interno) da opção.
        // Geralmente é o mesmo que o texto, mas pode ser diferente.
        option.value = fruta;
        
        // Define o texto visível da opção no dropdown.
        option.textContent = fruta;
        
        // Adiciona a nova <option> ao elemento <select>.
        selectFrutas.appendChild(option);
    });
};


// 4. Função para exibir a fruta escolhida na página.
// Esta função é chamada toda vez que uma nova opção é selecionada.
const exibirFrutaEscolhida = () => {
    // Pega o valor da opção que foi selecionada no dropdown.
    // 'selectFrutas.value' automaticamente pega o 'value' da <option> selecionada.
    const frutaSelecionada = selectFrutas.value;

    // Verifica se algo foi realmente selecionado (o valor inicial vazio seria falsy)
    if (frutaSelecionada) {
        // Atualiza o texto do parágrafo com a fruta escolhida.
        frutaEscolhidaParagrafo.textContent = `Você escolheu: ${frutaSelecionada}`;
    } else {
        // Se a opção padrão for selecionada (que não tem valor), limpa o parágrafo.
        frutaEscolhidaParagrafo.textContent = "";
    }
};


// --- Eventos e Inicialização ---

// 1. Chama a função 'popularDropdown' assim que o script é carregado.
// Isso garante que o dropdown já apareça preenchido com as frutas.
popularDropdown();


// 2. Adiciona um "ouvinte de evento" ao elemento <select>.
// O evento 'change' é disparado quando o valor selecionado no dropdown muda.
// Quando o evento 'change' ocorre, a função 'exibirFrutaEscolhida' é chamada.
selectFrutas.addEventListener("change", exibirFrutaEscolhida);