function tabs_balcony() {
    'use strict';

    let menu = document.querySelector('.decoration_slider'),
        tab = document.querySelectorAll('.decoration_item div'),
        internal = document.querySelector('.internal'),
        external = document.querySelector('.external'),
        rising = document.querySelector('.rising'),
        roof = document.querySelector('.roof'),
        mass = [internal, external, rising, roof];

    menu.addEventListener('click', function (event) {
        tab.forEach(function (item) {

            if (event.target == item || event.target == item.children[0]) {

                tab.forEach(function (item) {
                    item.classList.remove('after_click');
                });

                for (let i = 0; i < mass.length; i++) {
                    mass[i].style.display = 'none';
                    if (event.target == tab[i] || event.target == tab[i].children[0]) {
                        mass[i].style.display = 'block';
                        item.classList.add('after_click');
                    }
                }
            }
        });
    });
}
module.exports = tabs_balcony;