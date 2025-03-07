function verificaMes() {
  const elemento = document.getElementById('nomeMes');
  const meses = {
    janeiro: 1,
    fevereiro: 2,
    março: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12,
  };

  if (elemento instanceof HTMLInputElement) {
    const nomeMeses = elemento.value.toLowerCase();
    const numeroMes = meses[nomeMeses];

    if (numeroMes) {
      exibirResultado(
        'mesEscolhido',
        `O mês escolhido ${nomeMeses} é o mês de número ${numeroMes}`
      );
    } else {
      alert('Mês Inválido, tente novamente!');
    }
  }
}

function exibirResultado(elementId, mensagem) {
//prettier-ignore
  document.getElementById(elementId).innerText = mensagem;
}
