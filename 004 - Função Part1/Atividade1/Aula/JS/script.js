const soma = (number1, number2, exibirResultado) => {
  resultado = number1 + number2;
  exibirResultado(resultado);
};

const subtracao = (number1, number2, exibirResultado) => {
  resultado = number1 - number2;
  exibirResultado(number1 - number2);
};

const divisao = (number1, number2, exibirResultado) => {
  resultado = number1 / number2;
  exibirResultado(resultado);
};

const multiplicacao = (number1, number2) => {
  resultado = number1 * number2;
  exibirResultado(resultado);
};

function exibirOperacao() {
  const elementInput1 = document.getElementById('input1');
  const elementInput2 = document.getElementById('input2');

  let pegarIndex = document.querySelector('#escolhaOperacao');
  
  if ( (pegarIndex instanceof HTMLSelectElement) && (elementInput1 instanceof HTMLInputElement) && (elementInput2 instanceof HTMLInputElement)) {
    const number1 = parseFloat(elementInput1.value);
    const number2 = parseFloat(elementInput2.value);
    pegarIndex = pegarIndex.selectedIndex;
    switch (pegarIndex) {
      case 0:
        soma(number1, number2, exibirResultado);
        break;
      case 1:
        subtracao(number1, number2, exibirResultado);
        break;
      case 2:
        divisao(number1, number2, exibirResultado);
        break;
      case 3:
        multiplicacao(number1, number2, exibirResultado);
        break;
    }
  } else {
    alert('Erro, tente novamente!');
  }
}

function exibirResultado(resultado) {
  document.getElementById('res').innerHTML = `Resultado: ${resultado}`;
}
