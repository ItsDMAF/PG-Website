const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function redirectToMenu(location) {
    window.location.href = location + ".html";
}

document.getElementById('combo-image').addEventListener('click', function() {
    const imageSection = document.getElementById('image-section');
    const comboItems = document.getElementById('combo-items');
    
    imageSection.style.display = 'none';
    
    comboItems.style.display = 'grid';
});

document.getElementById('back-button').addEventListener('click', function() {
    const imageSection = document.getElementById('image-section');
    const comboItems = document.getElementById('combo-items');
    
    imageSection.style.display = 'block';
    
    comboItems.style.display = 'none';
});
