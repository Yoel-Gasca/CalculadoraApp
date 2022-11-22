//Button variables
const displayValor1 = document.getElementById('valor1');
const displayValor2 = document.getElementById('valor2');
const butonNumbers = document.querySelectorAll('.number');
const butonOperators = document.querySelectorAll('.operator');

const display = new Display(displayValor1, displayValor2);

butonNumbers.forEach(buton => {
    buton.addEventListener('click', () => display.addNumber(buton.innerHTML));
});

butonOperators.forEach(buton => {
    buton.addEventListener('click', () => display.computar(buton.value));
});