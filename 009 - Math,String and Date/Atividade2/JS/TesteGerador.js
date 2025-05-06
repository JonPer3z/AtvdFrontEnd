document.getElementById('gerarBtn').addEventListener('click', function() {
    
    const gerador = new GeradorNumeros(6, 20); // Limitando o valor mínimo e máximo do array.

    const numerosGerados = gerador.gerarNumeros(5); // Limitando a quantidade de números que irão ser gerados.
  
    
    numerosGerados.sort((a, b) => a - b); // Ordenando o array de números em ordem crescente.

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h3>Números Aleatórios Gerados (Ordenados):</h3>';
  
    // Criando uma lista para exibir os números
    const ul = document.createElement('ul');
    numerosGerados.forEach(numero => {
      const li = document.createElement('li');
      li.textContent = numero;
      ul.appendChild(li);
    });
  
    resultadoDiv.appendChild(ul);
  });
  