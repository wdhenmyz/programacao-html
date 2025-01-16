import { css } from '@emotion/css';

// Definindo a classe de estilo do pop-up
const popupStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  z-index: 1000;
`;

const hiddenStyle = css`
  display: none;
`;



// Função para exibir pop-up de carregamento
function showPopup() {
    const popup = document.getElementById('popup');
    if (!popup) {
      // Criar pop-up se não existir
      const newPopup = document.createElement('div');
      newPopup.id = 'popup';
      newPopup.className = popupStyle; // Aplicar o estilo
      newPopup.innerText = 'Carregando...';
      document.body.appendChild(newPopup);
    } else {
      popup.innerText = 'Carregando...';
      popup.classList.remove(hiddenStyle); // Remover o estilo de ocultação
    }
  }
  
  // Função para esconder o pop-up de carregamento
  function hidePopup() {
    // Verificar se o pop-up existe
    const popup = document.getElementById('popup');
    if (popup) {
      popup.classList.add(hiddenStyle); // Aplicar o estilo de ocultação
    }
  }

const button = document.getElementById('root');
button.onclick = () => {
    showPopup();
    setTimeout(hidePopup, 2000);
};