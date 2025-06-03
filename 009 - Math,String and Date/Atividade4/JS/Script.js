// Acessa os elementos HTML
        const fraseInput = document.getElementById('fraseInput');
        const btnCapitalizar = document.getElementById('btnCapitalizar');
        const resultadoParagrafo = document.getElementById('resultado');

        // Adiciona um ouvinte de evento para o clique do botão
        btnCapitalizar.addEventListener('click', () => {
            const fraseOriginal = fraseInput.value.trim(); // Pega a frase e remove espaços extras

            // Verifica se a frase está vazia
            if (fraseOriginal === '') {
                resultadoParagrafo.textContent = 'Por favor, digite uma frase.';
                return; // Sai da função
            }

            // 1. Divide a frase em um array de palavras, usando o espaço como delimitador.
            const palavras = fraseOriginal.split(' ');

            // 2. Transforma cada palavra
            const palavrasCapitalizadas = palavras.map(palavra => {
                if (palavra.length === 0) {
                    return ''; // Retorna uma string vazia se a palavra for vazia (ex: múltiplos espaços)
                }
                // Pega a primeira letra e transforma em maiúscula
                const primeiraLetra = palavra.charAt(0).toUpperCase();
                // Pega o restante da palavra (a partir da segunda letra) e transforma em minúsculas
                const restoDaPalavra = palavra.slice(1).toLowerCase();
                // Junta a primeira letra maiúscula com o restante
                return primeiraLetra + restoDaPalavra;
            });

            // 3. Junta as palavras capitalizadas de volta em uma frase, separadas por espaços.
            const fraseFinal = palavrasCapitalizadas.join(' ');

            // 4. Exibe o resultado na página
            resultadoParagrafo.textContent = fraseFinal;
        });

        // Opcional: Limpar o resultado quando o input é focado novamente
        fraseInput.addEventListener('focus', () => {
            resultadoParagrafo.textContent = '';
        });