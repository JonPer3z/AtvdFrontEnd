        // Acessa os elementos HTML
        const fraseOriginalInput = document.getElementById('fraseOriginal');
        const palavraAlvoInput = document.getElementById('palavraAlvo');
        const palavraSubstituicaoInput = document.getElementById('palavraSubstituicao');
        const btnSubstituir = document.getElementById('btnSubstituir');
        const resultadoParagrafo = document.getElementById('resultado');
        const mensagemErroParagrafo = document.getElementById('mensagemErro');

        // Função para exibir mensagens de erro/informação
        function showMessage(message, isError = false) {
            mensagemErroParagrafo.textContent = message;
            mensagemErroParagrafo.style.display = 'block';
            mensagemErroParagrafo.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';
            mensagemErroParagrafo.style.borderColor = isError ? '#f5c6cb' : '#c3e6cb';
            mensagemErroParagrafo.style.color = isError ? '#721c24' : '#155724';

            // Esconde a mensagem após 3 segundos
            setTimeout(() => {
                mensagemErroParagrafo.style.display = 'none';
            }, 3000);
        }

        // Adiciona um ouvinte de evento ao botão
        btnSubstituir.addEventListener('click', () => {
            const frase = fraseOriginalInput.value.trim();
            const alvo = palavraAlvoInput.value.trim();
            const substituicao = palavraSubstituicaoInput.value.trim();

            // Validação simples
            if (frase === '' || alvo === '' || substituicao === '') {
                showMessage('Por favor, preencha todos os campos.', true);
                resultadoParagrafo.textContent = 'Aguardando entrada...';
                return;
            }

            // 1. Usando include() para verificar se a palavra-alvo existe
            if (!frase.includes(alvo)) {
                showMessage(`A frase não contém a palavra-alvo "${alvo}".`, true);
                // Opcional: mesmo não contendo, podemos tentar substituir para ver o resultado sem alteração
                // Ou podemos simplesmente mostrar a frase original
                resultadoParagrafo.textContent = `Resultado: ${frase}`;
                return; // Sai da função, pois não há o que substituir
            }

            // 2. Usando replace() com Expressão Regular para substituir TODAS as ocorrências
            // 'g' (global): substitui todas as ocorrências
            // 'i' (insensitive): torna a busca insensível a maiúsculas/minúsculas (opcional, mas útil aqui)
            const regex = new RegExp(alvo, 'gi'); // Cria uma nova Regex a partir da palavra-alvo
            const novaFrase = frase.replace(regex, substituicao);

            resultadoParagrafo.textContent = `Resultado: ${novaFrase}`;
            showMessage('Substituição realizada com sucesso!', false);
        });