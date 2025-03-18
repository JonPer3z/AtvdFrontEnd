const arrayTarefas = [];

function cadastrarTarefa(entradaTarefa) {
    if (entradaTarefa) {
        if (arrayTarefas.includes(entradaTarefa) === false) {
            //if(!arrayTarefas.includes(entradaTarefa)){
            arrayTarefas.push(entradaTarefa);
            exibirConteudo();
        } else {
            alert('Tarefa já cadastrada.');
        }
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function exibirConteudo() {

    let item = document.getElementById('item')

    if (item instanceof HTMLUListElement) {

        while (item.firstChild) {
            item.removeChild(item.firstChild)
        }
        arrayTarefas.forEach(visualizador => {
            let li = document.createElement('li')
            li.textContent = visualizador
            item.appendChild(li)
        });
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
    let input = tarefa.value
    let indice = arrayTarefas.indexOf(input);
    tarefa.value = "";
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
            removerTarefaEscolhida(removeTarefa);
        })
    }
};

document.addEventListener('DOMContentLoaded', configurarCadastroDeTarefas);
