import React from 'react';
import ReactDOM from 'react-dom/client';
import { css } from '@emotion/css';
import styled from '@emotion/styled';


function hover() {
  const color = 'red';

  const App = () => (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );

  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App />);
}

hover();



function botao() {
  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

  const App2 = () => <Button>This is my button component.</Button>;

  const buttonContainer = document.getElementById('button');

  if (!buttonContainer) {
    const newButtonContainer = document.createElement('div');
    newButtonContainer.id = 'button';
    document.body.appendChild(newButtonContainer);
    
    // Criar a raiz e renderizar o componente
    const root2 = ReactDOM.createRoot(newButtonContainer);
    root2.render(<App2 />);
  } else {
    // Se já existe, apenas renderiza
    const root2 = ReactDOM.createRoot(buttonContainer);
    root2.render(<App2 />);
  }
}

botao()