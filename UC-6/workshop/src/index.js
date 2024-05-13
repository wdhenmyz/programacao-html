// importa o express para o meu projeto
const express = require('express')
// cria uma instacia do express
const app = express();
// '/' é o indereço base do servidor
// req - recebe a requisição
// res - envia uma resposta
// send é uma propriedade que envia alguma coisa
app.get('/teste', (req, res) => {
    res.send('Hello World! este é o meu primeiro servidor!')
})

app.listen(3000, () => {
    console.log('servidor: http://localhost:3000/');
});







