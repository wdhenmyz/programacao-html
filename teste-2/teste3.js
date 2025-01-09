import { css } from 'https://cdn.skypack.dev/@emotion/css';

const style = css`
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    background: green;
    &:hover {
        background: pink;
    }
`

const div = document.getElementById('div')

function color() {
    div.classList.add(style)
}

color()