// escola.js
// Definição da Classe Escola (ou Turma)
// Gerencia a coleção de objetos Aluno e suas operações (CRUD).

// IMPORTANTE: Para que esta classe funcione, a classe 'Aluno' (do aluno.js)
// precisa ser carregada ANTES dela no HTML.
class Escola {
    constructor() {
        this.alunos = []; // Array que armazenará os objetos Aluno.
    }

    // Adiciona um novo aluno ao registro da escola.
    adicionarAluno(aluno) {
        // Valida se a matrícula já existe (não pode haver matrículas duplicadas).
        if (this.alunos.some(a => a.matricula === aluno.matricula)) {
            throw new Error("Número de matrícula já existe. Por favor, use uma matrícula única.");
        }
        this.alunos.push(aluno);
    }

    // Retorna uma cópia do array de alunos para visualização (evita modificações diretas).
    visualizarAlunos() {
        return [...this.alunos];
    }

    // Atualiza as informações de um aluno existente.
    // 'matriculaOriginal' é usada para encontrar o aluno a ser editado.
    editarAluno(matriculaOriginal, novoNome, novaIdade, novaMatricula, novaNota1, novaNota2, novasObservacoes) {
        const index = this.alunos.findIndex(a => a.matricula === matriculaOriginal);
        if (index === -1) {
            throw new Error("Aluno com a matrícula original não encontrado para atualização.");
        }

        // --- Validação para atualização ---
        // Se a matrícula foi alterada, verifica se a nova matrícula já existe para outro aluno.
        if (novaMatricula !== matriculaOriginal && this.alunos.some((a, i) => i !== index && a.matricula === novaMatricula)) {
            throw new Error("Nova matrícula já existe para outro aluno.");
        }

        // Cria um objeto Aluno temporário para VALIDAR os novos dados antes de aplicá-los.
        // Se alguma validação falhar no construtor de Aluno, ele lançará uma exceção aqui.
        const alunoAtualizado = new Aluno(
            novoNome,
            novaIdade,
            novaMatricula,
            novaNota1,
            novaNota2,
            novasObservacoes
        );

        // Atualiza os atributos do aluno existente no array com os dados validados.
        this.alunos[index].nome = alunoAtualizado.nome;
        this.alunos[index].idade = alunoAtualizado.idade;
        this.alunos[index].matricula = alunoAtualizado.matricula;
        this.alunos[index].notas = alunoAtualizado.notas; // Atualiza o array de notas
        this.alunos[index].observacoes = alunoAtualizado.observacoes;
    }

    // Remove um aluno pelo número de matrícula.
    excluirAluno(matricula) {
        const tamanhoInicial = this.alunos.length;
        this.alunos = this.alunos.filter(a => a.matricula !== matricula);
        if (this.alunos.length === tamanhoInicial) {
            throw new Error("Aluno não encontrado para exclusão.");
        }
    }

    // Opcional: Pesquisar alunos por nome (adicionar se necessário, como no exercício anterior)
    // pesquisarAlunos(termo) {
    //     const termoLowerCase = termo.toLowerCase().trim();
    //     return this.alunos.filter(a => a.nome.toLowerCase().includes(termoLowerCase));
    // }

    // Opcional: Ordenar alunos (adicionar se necessário)
    // ordenarAlunos() {
    //     this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    // }
}