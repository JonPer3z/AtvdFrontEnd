const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
    if (entradaTarefa) {
        arrayTarefas.push(entradaTarefa);
        exibirConteudo();
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function exibirConteudo() {
    let saida = document.getElementById('resultado');
    if (saida instanceof HTMLParagraphElement) {
        saida.textContent = arrayTarefas.join(', ');
    }
}

function removerUltimaTarefa() {
    if (arrayTarefas.length > 0) {
        arrayTarefas.pop()
        exibirConteudo()
    }
    else {
        alert('Não existem tarefas cadastradas');
    }
}

function removerTarefaEscolhida(tarefa) {
    let indice = arrayTarefas.indexOf(tarefa);
    if (indice != -1) {
        arrayTarefas.splice(indice, 1)
        exibirConteudo()
    }
    else {
        alert('Tarefa não encontrada')
    }
}



const configurarCadastroDeTarefas = () => {
    let entradaTarefa = document.getElementById('tarefa');
    let botaoCadastrarTarefa = document.getElementById('cadastrarTarefaBtn');
    let botaoRemoverUltimaTarefa = document.getElementById('removerTarefaBtn');
    let removeTarefa = document.getElementById('tarefaRemovida')
    let botaoRemoverTarefaEscolhida = document.getElementById('removerTarefaEscolhidaBtn');



    if ((botaoCadastrarTarefa instanceof HTMLButtonElement) && (entradaTarefa instanceof HTMLInputElement)) {
        botaoCadastrarTarefa.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value = '';
        })
    }
    if (botaoRemoverUltimaTarefa instanceof HTMLButtonElement) {
        botaoRemoverUltimaTarefa.addEventListener('click', () => {
            removerUltimaTarefa();
        })
    }
    if ((botaoRemoverTarefaEscolhida instanceof HTMLButtonElement) && (removeTarefa instanceof HTMLInputElement)) {
        botaoRemoverTarefaEscolhida.addEventListener('click', () => {
            removerTarefaEscolhida(removeTarefa.value);
        })
    }
};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);
