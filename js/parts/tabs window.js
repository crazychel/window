function tabs_window() {
    'use strict';

    let menuGlaz = document.querySelector('.glazing_slider'),
        tabGlaz = document.querySelectorAll('.glazing_block'),
        tabContent = document.querySelectorAll('.glazing .container .row');

    menuGlaz.addEventListener('click', function (event) {
        tabGlaz.forEach(function (item) {

            if (event.target && event.target.classList.contains('glazing_block') || item.children[1] || item.children[0]) {

                tabGlaz.forEach(function (items) {
                    items.children[1].classList.remove('active');
                });
                event.target.classList.add('active');

                for (let i = 0; i < tabContent.length; i++) {
                    tabContent[i].style.display = 'none';
                    
                    if (event.target == tabGlaz[i] || event.target == tabGlaz[i].children[1] || event.target == tabGlaz[i].children[0]) {
                        tabContent[i].style.display = 'block';
                        tabGlaz[i].children[1].classList.add('active');
                    }
                }
            }
        });
    });
}
module.exports = tabs_window;