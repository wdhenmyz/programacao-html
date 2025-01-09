import { css } from 'https://cdn.skypack.dev/@emotion/css';

const click = css`
    height: 100px;
    width: 100px;
    color: blue;
    background: red;
`

const app = document.getElementById('root')

function color() {
    app.onclick = () => {
        app.classList.toggle(click)
    }
}

color()