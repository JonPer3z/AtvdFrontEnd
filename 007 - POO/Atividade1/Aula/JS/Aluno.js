export class Aluno {
    #nome;
    #nota = [];

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    get nota() {
        return this.#nota;
    }

    set nome(nome) {
        if (!nome || nome.trim() === '') {
            alert("Erro, digite o nome do aluno.");
        } else {
            this.#nome = nome;
        }
    }

    // Adicionando nota ao Array
    adicionarNota(nota) {
        if (typeof nota === "number" && nota >= 0) {
            this.#nota.push(nota);
        } else {
            alert("Nota inválida, insira um número positivo.");
        }
    }

    get quantidadeDeNotas() {
        return this.#nota.length;
    }

    somarNotas() {
        return this.#nota.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
    }

    calcularMedia() {
        if (this.quantidadeDeNotas === 0) {
            return 0;
        }
        return this.somarNotas() / this.quantidadeDeNotas;
    }
}
