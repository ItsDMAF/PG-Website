const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

m
function redirectToMenu(location) {
    window.location.href = location + ".html";
}enu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
