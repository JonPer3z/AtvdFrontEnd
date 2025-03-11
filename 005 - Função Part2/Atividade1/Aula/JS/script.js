const saudacao = (nome, mensagem) => {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Olá ${nome}! ${mensagem}`;
  }
};
const clickNoBotao = (nomeInput, mensagemInput) => {
  if (
    nomeInput instanceof HTMLInputElement &&
    mensagemInput instanceof HTMLInputElement
  ) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;

    nome = nome === '' ? 'Visitante' : nome; //ternário, usado para reduzir if e else

    // if(nome === ''){
    //     nome = 'Visitante';
    // }
    // else{
    //     nome = nome;
    // }

    mensagem = mensagem === '' ? 'Bem-Vindo' : mensagem; //ternário, usado para reduzir if e else

    // if(nome === ''){
    //     mensagem = 'Bem-Vindo';
    // }
    // else{
    //     mensagem = mensagem;
    // }

    saudacao(nome, mensagem);
  }
};

const configurarEventoSaudacao = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let nome = document.getElementById('nome');
  let mensagem = document.getElementById('mensagem');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      clickNoBotao(nome, mensagem);
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoSaudacao);
