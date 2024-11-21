const form = document.getElementById('funcionario-form');
const tableBody = document.getElementById('funcionarios-tabela');
const formHeader = document.getElementById('form-header');


// Atualiza a tabela com os dados fornecidos
function atualizarTabela(funcionarios) {
    tableBody.innerHTML = '';
    funcionarios.forEach(func => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${func.id}</td>
            <td>${func.nome}</td>
            <td>${func.dataNascimento}</td>
            <td>R$ ${func.salario.toFixed(2)}</td>
            <td>
                <button class="btn btn-sm btn-warning mx-1" onclick="preencherFormulario(${func.id})">Editar</button>
                <button class="btn btn-sm btn-danger mx-1" onclick="deletarFuncionario(${func.id})">Deletar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Preenche o formulário com os dados de um funcionário para edição
async function preencherFormulario(id) {
    const funcionario = await buscarFuncionario(id); // Função do app.js

    const idInput = document.getElementById('id');
    const nomeInput = document.getElementById('nome');
    const dataInput = document.getElementById('dataNascimento');
    const salarioInput = document.getElementById('salario');

    if (idInput && nomeInput && dataInput && salarioInput) {
        idInput.value = funcionario.id;
        nomeInput.value = funcionario.nome;
        dataInput.value = funcionario.dataNascimento;
        salarioInput.value = funcionario.salario;

        // Alterar o título do formulário para "Atualizar dados de funcionário"
        if (formHeader) formHeader.textContent = 'Atualizar dados de funcionário';
    } else {
        console.error('Um ou mais elementos do formulário não foram encontrados.');
    }
}


// Manipula o envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const idInput = document.getElementById('id');
    const nomeInput = document.getElementById('nome');
    const dataInput = document.getElementById('dataNascimento');
    const salarioInput = document.getElementById('salario');

    if (nomeInput && dataInput && salarioInput) {
        const id = idInput ? idInput.value : null;
        const nome = nomeInput.value;
        const dataNascimento = dataInput.value;
        const salario = parseFloat(salarioInput.value);

        const funcionario = { nome, dataNascimento, salario };
        await salvarFuncionario(funcionario, id); // Função do app.js

        form.reset(); // Limpa o formulário

        // Restaurar o título do formulário para "Adicionar Funcionário"
        if (formHeader) formHeader.textContent = 'Adicionar Funcionário';
    } else {
        console.error('Um ou mais campos do formulário não foram encontrados.');
    }
});
