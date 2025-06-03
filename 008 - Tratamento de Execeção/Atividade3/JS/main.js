// main.js
// Importante: No HTML, você precisa garantir que 'contato.js' e 'agenda.js'
// sejam carregados ANTES deste script.
// Se você estiver usando ES Modules:
// import Contato from './contato.js';
// import Agenda from './agenda.js';

// --- Instância da Agenda ---
const minhaAgenda = new Agenda(); // Agora Agenda e Contato vêm de outros arquivos.

// --- Acesso aos Elementos HTML (DOM) ---
const getElement = (id) => document.getElementById(id);

const contactNameInput = getElement("contactName");
const contactPhoneInput = getElement("contactPhone");
const contactEmailInput = getElement("contactEmail");
const originalContactNameInput = getElement("originalContactName");

const btnAddUpdateContact = getElement("btnAddUpdateContact");
const btnCancelEdit = getElement("btnCancelEdit");
const formTitle = getElement("formTitle");

const searchNameInput = getElement("searchName");
const btnSearch = getElement("btnSearch");
const btnSort = getElement("btnSort");

const contactListUl = getElement("contactList");
const noContactsMessage = getElement("noContactsMessage");
const messageDisplay = getElement("messageDisplay");

// --- Funções para Manipulação da Interface (Renderização e Mensagens) ---
const showMessage = (text, type = "info") => {
    messageDisplay.textContent = text;
    messageDisplay.className = `error-message ${type}-message`;
    messageDisplay.style.display = "block";
    setTimeout(() => {
        messageDisplay.style.display = "none";
    }, 3000);
};

const renderContacts = (contactsToDisplay) => {
    contactListUl.innerHTML = "";

    if (contactsToDisplay.length === 0) {
        noContactsMessage.style.display = "block";
    } else {
        noContactsMessage.style.display = "none";
        contactsToDisplay.forEach(contact => {
            const li = document.createElement("li");
            li.classList.add("contact-item");
            li.innerHTML = `
                <div class="contact-info">
                    <strong>${contact.nome}</strong><br>
                    Telefone: ${contact.formatarTelefone()}<br>
                    E-mail: ${contact.email}
                </div>
                <div class="contact-actions">
                    <button class="edit-button" data-name="${contact.nome}">Editar</button>
                    <button class="delete-button" data-name="${contact.nome}">Excluir</button>
                </div>
            `;
            contactListUl.appendChild(li);
        });
        addContactActionListeners();
    }
};

const addContactActionListeners = () => {
    document.querySelectorAll(".edit-button").forEach(button => {
        button.onclick = (event) => {
            const contactName = event.target.dataset.name;
            const contactToEdit = minhaAgenda.contatos.find(c => c.nome === contactName);
            if (contactToEdit) {
                contactNameInput.value = contactToEdit.nome;
                contactPhoneInput.value = contactToEdit.telefone;
                contactEmailInput.value = contactToEdit.email;
                originalContactNameInput.value = contactToEdit.nome;

                btnAddUpdateContact.textContent = "Salvar Edição";
                btnAddUpdateContact.classList.add("edit-mode");
                btnCancelEdit.classList.remove("hidden");
                formTitle.textContent = "Editar Contato";
            }
        };
    });

    document.querySelectorAll(".delete-button").forEach(button => {
        button.onclick = (event) => {
            const contactName = event.target.dataset.name;
            if (confirm(`Tem certeza que deseja excluir o contato ${contactName}?`)) {
                try {
                    minhaAgenda.excluirContato(contactName);
                    renderContacts(minhaAgenda.visualizarContatos());
                    showMessage("Contato excluído com sucesso!", "info");
                } catch (error) {
                    showMessage(error.message, "error");
                }
            }
        };
    });
};

const resetForm = () => {
    contactNameInput.value = "";
    contactPhoneInput.value = "";
    contactEmailInput.value = "";
    originalContactNameInput.value = "";

    btnAddUpdateContact.textContent = "Adicionar Contato";
    btnAddUpdateContact.classList.remove("edit-mode");
    btnCancelEdit.classList.add("hidden");
    formTitle.textContent = "Adicionar Novo Contato";
};

// --- Funções de Eventos Principais (Handlers) ---
const handleAddUpdateContact = () => {
    const nome = contactNameInput.value;
    const telefone = contactPhoneInput.value;
    const email = contactEmailInput.value;
    const originalName = originalContactNameInput.value;

    try {
        if (originalName) {
            minhaAgenda.editarContato(originalName, nome, telefone, email);
            showMessage("Contato editado com sucesso!", "info");
        } else {
            const novoContato = new Contato(nome, telefone, email);
            minhaAgenda.adicionarContato(novoContato);
            showMessage("Contato adicionado com sucesso!", "info");
        }
        resetForm();
        renderContacts(minhaAgenda.visualizarContatos());
    } catch (error) {
        showMessage(error.message, "error");
    }
};

const handleSearch = () => {
    const searchTerm = searchNameInput.value;
    const resultados = minhaAgenda.pesquisarContatos(searchTerm);
    if (resultados.length > 0) {
        renderContacts(resultados);
        showMessage(`Exibindo ${resultados.length} resultado(s) para "${searchTerm}".`, "info");
    } else {
        renderContacts([]);
        showMessage(`Nenhum contato encontrado para "${searchTerm}".`, "error");
    }
};

const handleSort = () => {
    minhaAgenda.ordenarContatos();
    renderContacts(minhaAgenda.visualizarContatos());
    showMessage("Contatos ordenados alfabeticamente.", "info");
};

const handleCancelEdit = () => {
    resetForm();
    showMessage("Edição cancelada.", "info");
    renderContacts(minhaAgenda.visualizarContatos());
};

// --- Configuração dos Event Listeners ---
btnAddUpdateContact.addEventListener("click", handleAddUpdateContact);
btnCancelEdit.addEventListener("click", handleCancelEdit);
btnSearch.addEventListener("click", handleSearch);
btnSort.addEventListener("click", handleSort);
searchNameInput.addEventListener("keyup", () => {
    if (searchNameInput.value.trim() !== '') {
        handleSearch();
    } else {
        renderContacts(minhaAgenda.visualizarContatos());
        messageDisplay.style.display = "none";
    }
});

// --- Inicialização da Aplicação ---
renderContacts(minhaAgenda.visualizarContatos());