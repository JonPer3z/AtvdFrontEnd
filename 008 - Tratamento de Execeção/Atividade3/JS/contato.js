// contato.js
// Definição da Classe Contato
class Contato {
    constructor(nome, telefone, email) {
        if (!nome || nome.trim() === '') {
            throw new Error("Nome do contato não pode ser vazio.");
        }
        if (!telefone || telefone.trim() === '') {
            throw new Error("Telefone do contato não pode ser vazio.");
        }
        if (!email || email.trim() === '') {
            throw new Error("E-mail do contato não pode ser vazio.");
        }

        this.nome = nome.trim();
        this.telefone = telefone.trim();
        this.email = email.trim();
    }

    formatarTelefone() {
        const digitos = this.telefone.replace(/\D/g, '');
        if (digitos.length === 11) {
            return `(${digitos.substring(0, 2)}) ${digitos.substring(2, 7)}-${digitos.substring(7)}`;
        } else if (digitos.length === 10) {
            return `(${digitos.substring(0, 2)}) ${digitos.substring(2, 6)}-${digitos.substring(6)}`;
        }
        return this.telefone;
    }

    validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }
}

// Exporta a classe Contato para que outros arquivos possam usá-la.
// Se você estiver usando ES Modules (com 'type="module"' no script tag do HTML)
// export default Contato;
// Para um ambiente de navegador simples (sem módulos), ela já fica disponível no escopo global
// quando o script é carregado antes dos outros que a usam.