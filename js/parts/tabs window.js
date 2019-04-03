function tabs_window() {
    'use strict';

    let menuGlaz = document.querySelector('.glazing_slider'),
        tabGlaz = document.querySelectorAll('.glazing_block'),
        tabContent = document.querySelectorAll('.glazing .container .row');

    menuGlaz.addEventListener('click', function (event) {
        tabGlaz.forEach(function (item) {

            if (event.target == item.children[1]) {

                tabGlaz.forEach(function (item) {
                    item.children[1].classList.remove('active');
                });
                event.target.classList.add('active');

                for (let i = 0; i < tabContent.length; i++) {
                    tabContent[i].style.display = 'none';
                    if (event.target == tabGlaz[i].children[1]) {
                        tabContent[i].style.display = 'block';
                    }
                }
            }
        });
    });
}
module.exports = tabs_window;