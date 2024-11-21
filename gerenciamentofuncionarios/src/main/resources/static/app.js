const apiUrl = 'http://localhost:8080/api/funcionarios';


async function carregarFuncionarios() {
    const response = await fetch(apiUrl);
    const funcionarios = await response.json();
    atualizarTabela(funcionarios); //
}


async function salvarFuncionario(funcionario, id = null) {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    const method = id ? 'PUT' : 'POST';

    await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(funcionario),
    });

    carregarFuncionarios(); //
}


async function buscarFuncionario(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    return response.json();
}


async function deletarFuncionario(id) {
    const funcionario = await buscarFuncionario(id);
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    carregarFuncionarios(); // Recarrega a tabela após deletar
    exibirPopup(`O funcionário ${funcionario.nome} foi deletado.`);
}
carregarFuncionarios();
