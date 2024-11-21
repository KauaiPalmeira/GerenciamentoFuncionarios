// Função para exibir o pop-up
function exibirPopup(mensagem, duracao = 3000) {
    // Verifica se já existe um pop-up, e remove para evitar duplicados
    const popupExistente = document.querySelector('.popup-container');
    if (popupExistente) popupExistente.remove();

    // Cria o contêiner do pop-up
    const popup = document.createElement('div');
    popup.className = 'popup-container';

    // Adiciona a mensagem ao pop-up
    popup.innerHTML = `
        <span>${mensagem}</span>
        <div class="popup-progress-bar"></div>
    `;

    // Adiciona o pop-up ao corpo do documento
    document.body.appendChild(popup);

    // Inicia a animação da barra de progresso
    const progressBar = popup.querySelector('.popup-progress-bar');
    progressBar.style.animationDuration = `${duracao}ms`;

    // Remove o pop-up após o tempo especificado
    setTimeout(() => {
        popup.remove();
    }, duracao);
}
