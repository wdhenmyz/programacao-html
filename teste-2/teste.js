import { css } from '@emotion/css';

const app = document.getElementById('root')
const style = css`
    height: 100px;
    widht: 100px;
    color: red;
    background: blue;
`

app.classList.add(style)