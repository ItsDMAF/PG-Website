const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const openPopup = document.getElementById('openPopup');
        const closePopup = document.getElementById('closePopup');
        const popup = document.getElementById('popup');

        openPopup.addEventListener('click', function (e) {
            e.preventDefault();
            popup.style.display = 'flex';
            document.body.classList.add('no-scroll');
        });

        closePopup.addEventListener('click', function () {
            popup.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });

        const openImagePopup = document.getElementById('openImagePopup');
        const closeImagePopup = document.getElementById('closeImagePopup');
        const imagePopup = document.getElementById('imagePopup');

        openImagePopup.addEventListener('click', function (e) {
            e.preventDefault();
            imagePopup.style.display = 'flex';
            document.body.classList.add('no-scroll'); 
        });

        closeImagePopup.addEventListener('click', function () {
            imagePopup.style.display = 'none'; 
            document.body.classList.remove('no-scroll'); 
        });