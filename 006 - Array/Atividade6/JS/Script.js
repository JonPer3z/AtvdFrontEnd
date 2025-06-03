// --- EXERCÍCIO: Dropdown de Frutas Dinâmico com Imagem (Usando Links da Internet) ---

// 1. Defina um array com as opções de frutas que aparecerão no dropdown.
const frutas = ["Abacate", "Maçã", "Pera", "Laranja"];

// 2. Crie um objeto (um mapa ou dicionário) que associa o nome de cada fruta
// ao link (URL) da sua respectiva imagem na internet.
// IMPORTANTE: Estes links são de exemplo e podem ser alterados se você encontrar outros.
// Verifique se os links são diretos para arquivos de imagem (.jpg, .png, etc.).
const linksImagensFrutas = {
    "Abacate": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass.jpg/640px-Avocado_Hass.jpg",
    "Maçã": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Red_Apple.jpg/640px-Red_Apple.jpg",
    "Pera": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pyrus_communis_%28Bartlett_Pear%29.jpg/640px-Pyrus_communis_%28Bartlett_Pear%29.jpg",
    "Laranja": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Orange_juice_and_oranges.jpg/640px-Orange_juice_and_oranges.jpg"
};


// 3. Acesse os elementos HTML que vamos manipular usando seus IDs.
// Pega o elemento <select> (o dropdown) do HTML.
const selectFrutas = document.getElementById("selectFrutas");

// Pega o parágrafo onde o nome da fruta escolhida será exibido.
const frutaEscolhidaTextoParagrafo = document.getElementById("frutaEscolhidaTexto");

// Pega o elemento <img> onde a imagem da fruta será carregada.
const imagemFrutaElement = document.getElementById("imagemFruta");


// 4. Função para popular (preencher) o dropdown com as opções do array 'frutas'.
// Esta função é executada uma vez, assim que o script é carregado, para montar o dropdown.
const popularDropdown = () => {
    // Itera sobre cada 'fruta' no array 'frutas'.
    frutas.forEach(fruta => {
        // Cria um novo elemento HTML <option> para cada fruta.
        const option = document.createElement("option");
        
        // Define o 'value' (valor interno) da <option>.
        // Este é o valor que será pego quando o usuário selecionar a opção.
        option.value = fruta;
        
        // Define o texto visível da <option> que aparece no dropdown.
        option.textContent = fruta;
        
        // Adiciona a <option> recém-criada ao elemento <select> no HTML.
        selectFrutas.appendChild(option);
    });
};


// 5. Função para exibir a fruta escolhida e carregar sua imagem na página.
// Esta função é chamada toda vez que o usuário seleciona uma nova opção no dropdown.
const exibirFrutaEscolhida = () => {
    // Pega o 'value' da opção que está atualmente selecionada no dropdown.
    const frutaSelecionada = selectFrutas.value;

    // Verifica se uma fruta válida foi selecionada (evita a opção "Selecione uma fruta..." vazia).
    if (frutaSelecionada) {
        // Atualiza o texto do parágrafo para informar qual fruta foi escolhida.
        frutaEscolhidaTextoParagrafo.textContent = `Você escolheu: ${frutaSelecionada}`;
        
        // Busca o link da imagem correspondente no objeto 'linksImagensFrutas'.
        // Por exemplo, se frutaSelecionada for "Maçã", ele buscará linksImagensFrutas["Maçã"].
        const linkDaImagem = linksImagensFrutas[frutaSelecionada];
        
        // Atualiza o atributo 'src' do elemento <img> com o link da imagem.
        // Isso faz o navegador carregar e exibir a imagem da internet.
        imagemFrutaElement.src = linkDaImagem;

        // Atualiza o atributo 'alt' da imagem para acessibilidade, informando qual fruta é.
        imagemFrutaElement.alt = `Imagem de ${frutaSelecionada}`;

    } else {
        // Se a opção padrão (vazia) for selecionada ou nenhuma fruta válida,
        // limpa o texto e a imagem.
        frutaEscolhidaTextoParagrafo.textContent = "";
        imagemFrutaElement.src = "";
        imagemFrutaElement.alt = "Aguardando seleção da fruta.";
    }
};


// --- Eventos e Inicialização ---

// 1. Chama a função 'popularDropdown' assim que o script é carregado.
// Isso garante que o dropdown já apareça preenchido com as opções de frutas.
popularDropdown();


// 2. Adiciona um "ouvinte de evento" ao elemento <select>.
// O evento 'change' é disparado SEMPRE que o valor selecionado no dropdown muda.
// Quando o evento 'change' ocorre, a função 'exibirFrutaEscolhida' é chamada para atualizar a página.
selectFrutas.addEventListener("change", exibirFrutaEscolhida);