
function exibirPopup(mensagem, duracao = 3000) {
    const popupExistente = document.querySelector('.popup-container');
    if (popupExistente) popupExistente.remove();
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = `
        <span>${mensagem}</span>
        <div class="popup-progress-bar"></div>
    `;
    document.body.appendChild(popup);

    const progressBar = popup.querySelector('.popup-progress-bar');
    progressBar.style.animationDuration = `${duracao}ms`;
    setTimeout(() => {
        popup.remove();
    }, duracao);
}
