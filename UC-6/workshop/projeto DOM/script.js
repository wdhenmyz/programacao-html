let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})



const mode = document.getElementById('chk')
mode.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})


const meubotao = document.getElementById('meu-botao')
const titulo = document.getElementById('titulo')

meubotao.addEventListener("click", function() {
    alert("o botão foi clicado!")
    titulo.innerHTML = `
    <h3>eita! mudou...</h3>
`
})


const MeuImput = document.getElementById('meu-campo')

MeuImput.addEventListener("keydown", function(letra) {
    console.log(`tecla pressionada: ${letra.key}`);
})


const MudartTexto = document.getElementById('mudar-texto')
const MeuTexto = document.getElementById('meutexto')

MudartTexto.addEventListener("click", function() {
    MeuTexto.innerHTML = `
    <h3>eita! mudou...</h3>
    <h3>opss....</h3>
`
})


const BotaoMudarImagem = document.getElementById('botao-mudar-imagem')
const Imagem = document.getElementById('imagem')
const BotaoMudarImagem2 = document.getElementById('botao-mudar-imagem2')

BotaoMudarImagem.addEventListener("click", function() {
    Imagem.setAttribute('src', '../projeto bootstrap/images/img-02.jpg')
})

BotaoMudarImagem2.addEventListener("click", function() {
    Imagem.setAttribute('src', '../projeto bootstrap/images/img-01.jpg')
})


