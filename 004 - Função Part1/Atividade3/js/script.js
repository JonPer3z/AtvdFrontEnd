const textMaiusculo = (text, exibirResultado) => {
  const resultado = text.toUpperCase();
  exibirResultado(resultado);
};

function transformarTexto() {
  const element = document.getElementById('input');

  if (element instanceof HTMLInputElement) {
    const text = element.value;

    textMaiusculo(text, exibirResultado);
  } else {
    alert('Digite um algo no campo de entrada');
  }
}

function exibirResultado(resultado) {
  document.getElementById('output').innerHTML = resultado;
}
