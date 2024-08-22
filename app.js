const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function redirectToMenu(location) {
    window.location.href = location + ".html";
}

document.querySelectorAll('.combo-image').forEach(function(image, index) {
    image.addEventListener('click', function() {
        const imageSection = document.getElementById(`image-section-${index + 1}`);
        const comboItems = document.getElementById(`combo-items-${index + 1}`);

        imageSection.style.display = 'none';
        comboItems.style.display = 'grid';
    });
});

document.querySelectorAll('.back-button').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const imageSection = document.getElementById(`image-section-${index + 1}`);
        const comboItems = document.getElementById(`combo-items-${index + 1}`);

        imageSection.style.display = 'block';
        comboItems.style.display = 'none';
    });
});
