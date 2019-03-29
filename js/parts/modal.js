function modal() {
    let engineer = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close')[1];



    engineer.addEventListener('click', () => {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        popupEngineer.style.display = 'none';
        document.body.style.overflow = '';
    });

    popupEngineer.addEventListener('click', function (event) {
        if (event.target == popupEngineer) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';

        }
    });
}

module.exports = modal;