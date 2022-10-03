'use strict';

let data = null;
async function prepare() {
    let response = await fetch('https://emoji.ymatuhin.workers.dev/');
    if (response.ok) {
        data = await response.json();
        data.forEach(elem => { container.append(createCard(elem)) })
        createCard(data);
    } else {alert(`error`)}
}
prepare()


const container = document.querySelector('.container2')
function createCard(obj) {
    const div1 = document.createElement('div')
    div1.className = "card"
    const name1 = document.createElement('h2')
    name1.textContent = obj.symbol
    const description1 = document.createElement('span')
    description1.textContent = obj.title
    const other1 = document.createElement('p')
    other1.textContent = obj.keywords

    div1.append(name1)
    div1.append(description1)
    div1.append(other1)

    return div1;
}

// data.forEach(elem => { container.append(createCard(elem)) })

const input = document.querySelector('.input')
input.addEventListener('input', inputFunction)
function inputFunction(event) {
    let arr5 = data.filter((elem) => elem.title.toLowerCase().includes(event.target.value.trim()));
    container.innerHTML = '';
    arr5.forEach(elem => {container.append(createCard(elem))});
}







