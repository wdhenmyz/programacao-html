import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash, agora incluindo em nosso projeto
    element.innerHTML= _.join(['hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());