const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');

const enviarBtn = document.querySelector(".enviar");
const enviado = document.querySelector(".enviado");

openCloseButton.addEventListener('click', e => {
    menuMobileItems.classList.toggle('menu-mobile-closed')
});

enviarBtn.addEventListener('click', e => {
    e.preventDefault();
    enviado.innerHTML = "Mensaje enviado correctamente";
});