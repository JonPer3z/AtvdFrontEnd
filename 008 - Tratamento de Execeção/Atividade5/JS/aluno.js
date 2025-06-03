// aluno.js
// Definição da Classe Aluno
// Representa um aluno individual com seus atributos e métodos.
class Aluno {
    constructor(nome, idade, matricula, nota1, nota2, observacoes = "") {
        // --- Tratamento de Exceções para validação inicial ---
        if (!nome || nome.trim() === '') {
            throw new Error("Nome do aluno não pode ser vazio.");
        }
        if (isNaN(idade) || idade < 0 || idade > 120) {
            throw new Error("Idade inválida. Deve ser um número entre 0 e 120.");
        }
        if (!matricula || matricula.trim() === '') {
            throw new Error("Número de matrícula não pode ser vazio.");
        }
        // Validação de notas: precisam ser números entre 0 e 10
        if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
            throw new Error("Nota da Disciplina 1 inválida. Deve ser entre 0 e 10.");
        }
        if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
            throw new Error("Nota da Disciplina 2 inválida. Deve ser entre 0 e 10.");
        }

        this.nome = nome.trim();
        this.idade = idade;
        this.matricula = matricula.trim(); // Matrícula como string
        this.notas = [parseFloat(nota1), parseFloat(nota2)]; // Armazena notas como números
        this.observacoes = observacoes.trim();
    }

    // Método para calcular a média das notas do aluno.
    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    // Método para verificar se o aluno foi aprovado (exemplo: média >= 7).
    estaAprovado(mediaMinima = 7) {
        return this.calcularMedia() >= mediaMinima;
    }
}
// Não é necessário "exportar" explicitamente aqui para uso em navegador com tags <script> simples.
// A classe se torna global assim que o script é executado.