const boton = document.querySelector(".griego");
const primerul = document.querySelector(".primerul");

boton.addEventListener('click', () => {
    primerul.classList.toggle('ocultar');
});