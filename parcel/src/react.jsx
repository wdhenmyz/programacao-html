import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contagem: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}
