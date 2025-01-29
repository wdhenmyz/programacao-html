import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

console.log('Hello World!');

function Component() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contagem: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

// Selecionar o elemento onde o React vai renderizar
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

// Renderizar o componente no DOM
root.render(<Component />);