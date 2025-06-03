// main.js
// Lógica principal da aplicação: interação com o DOM, listeners e uso das classes.

// IMPORTANTE: As classes 'Aluno' (de aluno.js) e 'Escola' (de escola.js)
// precisam ser carregadas ANTES deste script no HTML.

// --- Instância da Escola ---
const minhaEscola = new Escola();


// --- Acesso aos Elementos HTML (DOM) ---

// Função auxiliar para pegar um elemento HTML pelo seu ID de forma mais curta.
const getElement = (id) => document.getElementById(id);

// Elementos do formulário de cadastro/edição de alunos
const studentNameInput = getElement("studentName");
const studentAgeInput = getElement("studentAge");
const studentEnrollmentInput = getElement("studentEnrollment");
const studentGrade1Input = getElement("studentGrade1");
const studentGrade2Input = getElement("studentGrade2");
const studentObservationsInput = getElement("studentObservations");
const originalEnrollmentInput = getElement("originalEnrollment"); // Campo hidden para edição

// Botões do formulário
const btnAddUpdateStudent = getElement("btnAddUpdateStudent");
const btnCancelEdit = getElement("btnCancelEdit");

// Título do formulário (muda entre "Adicionar" e "Atualizar")
const formTitle = getElement("formTitle");

// Lista de alunos e mensagem de "nenhum aluno"
const studentListUl = getElement("studentList");
const noStudentsMessage = getElement("noStudentsMessage");

// Área para exibir mensagens de erro/sucesso
const messageDisplay = getElement("messageDisplay");


// --- Funções para Manipulação da Interface (Renderização e Mensagens) ---

// Função auxiliar para exibir mensagens na tela (erro ou sucesso).
const showMessage = (text, type = "info") => {
    messageDisplay.textContent = text;
    messageDisplay.className = `message ${type}-message`; // Define a classe CSS
    messageDisplay.style.display = "block"; // Mostra a mensagem
    // Esconde a mensagem após 4 segundos
    setTimeout(() => {
        messageDisplay.style.display = "none";
    }, 4000);
};

// Função para renderizar (exibir) os alunos na lista HTML.
// Recebe um array de alunos para exibir.
const renderStudents = (studentsToDisplay) => {
    studentListUl.innerHTML = ""; // Limpa a lista atual.

    if (studentsToDisplay.length === 0) {
        noStudentsMessage.style.display = "block"; // Mostra a mensagem "nenhum aluno"
    } else {
        noStudentsMessage.style.display = "none"; // Esconde a mensagem "nenhum aluno"
        // Para cada aluno no array, cria seu item HTML.
        studentsToDisplay.forEach(student => {
            const li = document.createElement("li"); // Cria um item de lista <li>
            li.classList.add("student-item"); // Adiciona classe CSS para estilização

            const media = student.calcularMedia().toFixed(1); // Calcula e formata a média
            const status = student.estaAprovado() ? "Aprovado" : "Reprovado"; // Verifica o status

            li.innerHTML = `
                <div class="student-info">
                    <strong>${student.nome}</strong> (Matrícula: ${student.matricula})<br>
                    Idade: ${student.idade} anos | Média: ${media} (${status})<br>
                    Obs: ${student.observacoes || "Nenhuma"}
                </div>
                <div class="student-actions">
                    <button class="edit-button" data-matricula="${student.matricula}">Editar</button>
                    <button class="delete-button" data-matricula="${student.matricula}">Excluir</button>
                </div>
            `;
            // Adiciona o item à lista <ul> no HTML.
            studentListUl.appendChild(li);
        });
        // Adiciona listeners para os botões de editar/excluir APÓS eles serem criados.
        addStudentActionListeners();
    }
};

// Função para adicionar os ouvintes de evento aos botões de Editar e Excluir.
// É chamada sempre que os alunos são renderizados novamente.
const addStudentActionListeners = () => {
    document.querySelectorAll(".edit-button").forEach(button => {
        button.onclick = (event) => {
            const matriculaToEdit = event.target.dataset.matricula;
            // Encontra o aluno no array principal gerenciado pela Escola.
            const studentToEdit = minhaEscola.alunos.find(s => s.matricula === matriculaToEdit);
            
            if (studentToEdit) {
                // Preenche o formulário com os dados do aluno a ser editado.
                studentNameInput.value = studentToEdit.nome;
                studentAgeInput.value = studentToEdit.idade;
                studentEnrollmentInput.value = studentToEdit.matricula;
                studentGrade1Input.value = studentToEdit.notas[0];
                studentGrade2Input.value = studentToEdit.notas[1];
                studentObservationsInput.value = studentToEdit.observacoes;
                
                // Guarda a matrícula original no campo hidden para saber qual aluno editar.
                originalEnrollmentInput.value = studentToEdit.matricula;

                // Muda o texto do botão e mostra o botão de cancelar.
                btnAddUpdateStudent.textContent = "Atualizar Aluno";
                btnAddUpdateStudent.classList.add("edit-mode");
                btnCancelEdit.classList.remove("hidden");
                formTitle.textContent = "Editar Informações do Aluno";
            }
        };
    });

    document.querySelectorAll(".delete-button").forEach(button => {
        button.onclick = (event) => {
            const matriculaToDelete = event.target.dataset.matricula;
            if (confirm(`Tem certeza que deseja excluir o aluno de matrícula ${matriculaToDelete}?`)) {
                try {
                    // Chama o método da classe Escola para excluir o aluno.
                    minhaEscola.excluirAluno(matriculaToDelete);
                    renderStudents(minhaEscola.visualizarAlunos()); // Renderiza a lista atualizada
                    showMessage("Aluno excluído com sucesso!", "info");
                } catch (error) {
                    showMessage(error.message, "error");
                }
            }
        };
    });
};

// Função para resetar o formulário para o modo "Adicionar".
const resetForm = () => {
    studentNameInput.value = "";
    studentAgeInput.value = "";
    studentEnrollmentInput.value = "";
    studentGrade1Input.value = "";
    studentGrade2Input.value = "";
    studentObservationsInput.value = "";
    originalEnrollmentInput.value = ""; // Limpa a matrícula original guardada

    btnAddUpdateStudent.textContent = "Adicionar Aluno";
    btnAddUpdateStudent.classList.remove("edit-mode");
    btnCancelEdit.classList.add("hidden");
    formTitle.textContent = "Adicionar Novo Aluno";
};


// --- Funções de Eventos Principais (Handlers de Botões) ---

// Handler para o botão Adicionar/Atualizar Aluno.
const handleAddUpdateStudent = () => {
    const nome = studentNameInput.value;
    const idade = parseInt(studentAgeInput.value);
    const matricula = studentEnrollmentInput.value;
    const nota1 = parseFloat(studentGrade1Input.value);
    const nota2 = parseFloat(studentGrade2Input.value);
    const observacoes = studentObservationsInput.value;

    const originalEnrollment = originalEnrollmentInput.value; // Matrícula original para edição

    try {
        if (originalEnrollment) { // Se originalEnrollment tem valor, estamos em modo de edição
            // Chama o método da classe Escola para editar o aluno.
            minhaEscola.editarAluno(originalEnrollment, nome, idade, matricula, nota1, nota2, observacoes);
            showMessage("Informações do aluno atualizadas com sucesso!", "info");

        } else { // Caso contrário, estamos adicionando um novo aluno
            // Cria um novo objeto Aluno (construtor valida os dados).
            const novoAluno = new Aluno(nome, idade, matricula, nota1, nota2, observacoes);
            // Chama o método da classe Escola para adicionar o aluno.
            minhaEscola.adicionarAluno(novoAluno);
            showMessage("Aluno adicionado com sucesso!", "info");
        }
        
        resetForm(); // Limpa o formulário após a operação.
        renderStudents(minhaEscola.visualizarAlunos()); // Atualiza a lista exibida.
    } catch (error) {
        showMessage(error.message, "error"); // Exibe a mensagem de erro da exceção.
    }
};

// Handler para o botão Cancelar Edição.
const handleCancelEdit = () => {
    resetForm();
    showMessage("Edição de aluno cancelada.", "info");
    renderStudents(minhaEscola.visualizarAlunos()); // Garante que a lista principal seja renderizada.
};


// --- Configuração dos Event Listeners ---
btnAddUpdateStudent.addEventListener("click", handleAddUpdateStudent);
btnCancelEdit.addEventListener("click", handleCancelEdit);


// --- Inicialização da Aplicação ---
// Carrega a lista de alunos (inicialmente vazia) quando a página é carregada.
renderStudents(minhaEscola.visualizarAlunos());

// Opcional: Adicionar alguns alunos de teste para facilitar o desenvolvimento
/*
try {
    minhaEscola.adicionarAluno(new Aluno("Ana Paula Silva", 15, "2023001", 8.5, 7.0, "Aluna dedicada."));
    minhaEscola.adicionarAluno(new Aluno("João Carlos Souza", 16, "2023002", 6.0, 5.5)); // Reprovado
    minhaEscola.adicionarAluno(new Aluno("Maria Fernanda G.", 14, "2023003", 9.0, 9.5, "Excelente desempenho."));
    minhaEscola.adicionarAluno(new Aluno("Pedro Mendes", 15, "2023004", 7.5, 8.0));
    renderStudents(minhaEscola.visualizarAlunos());
    showMessage("Alunos de exemplo carregados!", "info");
} catch (e) {
    console.error("Erro ao adicionar alunos de exemplo:", e.message);
}
*/