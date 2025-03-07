function exibirDisciplinaSelecionada(){
    const selecaoDeDisplica = document.getElementById('selecioneDisplina'); 

    if(selecaoDeDisplica instanceof HTMLSelectElement){
        let i = selecaoDeDisplica.selectedIndex; 
        let disciplinaSelecionada = selecaoDeDisplica.options[i].value; 
        document.getElementById('resultado').textContent = `Bem vindo à displina de ${disciplinaSelecionada}!`;
    }

    else{
        alert("Por favor, selecione uma displina!"); 
    }
}