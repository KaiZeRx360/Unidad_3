const app = document.getElementById('app');
let templateHTML = '';
let ArrayCard = [];
let ArrayEmojis = [];
const btn = document.getElementById('btn');
let listEmojis = ['😀', '😎', '🥳', '😊', '🤩', '😇', '😃', '🥰', '😋', '😄', '😍', '😘'];
let count = 0;
console.log(ArrayCard.length);
listEmojis.forEach((emoji) => {
    templateHTML += `
    <div class="card">
        <div class="sides front"></div>
        <div class="sides back">${emoji}</div>
    </div>
    `;
});

app.innerHTML = templateHTML;

app.addEventListener('click', (e) => {
    let value = e.target.matches('.front');

    if (value && ArrayCard.length <= 2) {
        console.log(ArrayCard);
        if (count <= 1) {
            let ElementCard = e.target.parentElement;
            let emoji = ElementCard.children[1].textContent;

            ElementCard.classList.add('rotate');
            ArrayCard = [...ArrayCard, ElementCard];
            ArrayEmojis = [...ArrayEmojis, emoji];

            verificarTarjetas();
        }
    }
});

const verificarTarjetas = () => {
    if (ArrayCard.length > 1) {
        if (ArrayEmojis[0] === ArrayEmojis[1]) {
            ArrayCard = "";
            ArrayEmojis = "";
        } else {
            setTimeout(() => {
                ArrayCard[0].classList.remove('rotate');
                ArrayCard[1].classList.remove('rotate');
                ArrayCard = "";
                ArrayEmojis = "";
            }, 800);
        }
    }
};

const aleatorio = () => {
    for (let index = app.children.length; index >= 0; index--) {
        app.appendChild(app.children[(Math.random() * index) | 0]);
    }
};

const tarjetas = document.querySelectorAll('.card');

btn.addEventListener('click', () => {
    aleatorio();

    for (let index of tarjetas) {
        index.classList.remove('rotate');
    }
});
