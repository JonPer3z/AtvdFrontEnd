// agenda.js
// Definição da Classe Agenda
// Assume que a classe Contato está disponível (carregada antes no HTML)
class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        if (this.contatos.some(c => c.nome.toLowerCase() === contato.nome.toLowerCase())) {
            throw new Error("Contato com este nome já existe.");
        }
        if (!contato.validarEmail()) {
            throw new Error("Formato de e-mail inválido.");
        }
        this.contatos.push(contato);
    }

    visualizarContatos() {
        return [...this.contatos];
    }

    editarContato(nomeOriginal, novoNome, novoTelefone, novoEmail) {
        const index = this.contatos.findIndex(c => c.nome.toLowerCase() === nomeOriginal.toLowerCase());
        if (index === -1) {
            throw new Error("Contato não encontrado para edição.");
        }

        const tempContato = new Contato(novoNome, novoTelefone, novoEmail); // Reusa Contato para validação
        if (!tempContato.validarEmail()) {
            throw new Error("Novo formato de e-mail inválido.");
        }
        if (nomeOriginal.toLowerCase() !== novoNome.toLowerCase() &&
            this.contatos.some((c, i) => i !== index && c.nome.toLowerCase() === novoNome.toLowerCase())) {
            throw new Error("Novo nome de contato já está em uso.");
        }

        this.contatos[index].nome = novoNome.trim();
        this.contatos[index].telefone = novoTelefone.trim();
        this.contatos[index].email = novoEmail.trim();
    }

    excluirContato(nome) {
        const tamanhoInicial = this.contatos.length;
        this.contatos = this.contatos.filter(c => c.nome.toLowerCase() !== nome.toLowerCase());
        if (this.contatos.length === tamanhoInicial) {
            throw new Error("Contato não encontrado para exclusão.");
        }
    }

    pesquisarContatos(termo) {
        const termoLowerCase = termo.toLowerCase().trim();
        return this.contatos.filter(c => c.nome.toLowerCase().includes(termoLowerCase));
    }

    ordenarContatos() {
        this.contatos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
}