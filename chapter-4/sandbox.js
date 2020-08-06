// 36) Callback Functions in Action

const ul = document.querySelector('.people');

const people = ['mark', 'mario', 'luigi', 'siri', 'alexa'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;