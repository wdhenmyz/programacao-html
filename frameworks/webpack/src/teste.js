import { css } from '@emotion/css';

const style = css`
    height: 100px;
    width: 100px;
    color: red;
    background: blue;
`

const app = document.getElementById('root')

function color() {
    app.classList.add(style)
}

color()