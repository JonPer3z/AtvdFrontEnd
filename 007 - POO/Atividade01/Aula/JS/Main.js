import { Aluno } from "./Aluno.js";

export class Principal {
    constructor() {
        this.nomeInput = document.getElementById('nomeInput');
        this.notaInput = document.getElementById('notaInput');
        this.adicionarNotaButton = document.getElementById('adicionarNota');
        this.calcularMediaButton = document.getElementById('calcularMedia');
        this.resultado = document.getElementById('resultado');
        
        this.aluno = null;

        this.adicionarNotaButton.addEventListener('click', () => {
            this.adicionarNota();
        });

        this.calcularMediaButton.addEventListener('click', () => {
            this.calcularMediaNota();
        });
    }

    
    adicionarNota() {
        if((this.notaInput instanceof HTMLInputElement) && (this.nomeInput instanceof HTMLInputElement)){
            const nome = this.nomeInput.value.trim();
            const nota = parseFloat(this.notaInput.value);
    
            if (!this.aluno && nome) {
                this.aluno = new Aluno(nome);
            } else if (!this.aluno) {
                alert("Por favor, digite o nome do aluno.");
                return;
            }
    
            if (isNaN(nota)) {
                alert("Por favor, insira uma nota válida.");
                return;
            }
    
            this.aluno.adicionarNota(nota);
    
    
            this.notaInput.value = '';
            alert("Nota adicionada com sucesso!");

        }

    }


    calcularMediaNota() {
       

        if (!this.aluno || this.aluno.nota.length === 0) {
            alert("O aluno não tem notas registradas.");
            return;
        }

        const media = this.aluno.calcularMedia();
        this.resultado.textContent = `A média de ${this.aluno.nome} é: ${media.toFixed(2)}`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new Principal();
});
