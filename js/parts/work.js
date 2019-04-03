function work() {
    'use strict';

    let works = document.querySelector('.works'),
        container = works.getElementsByTagName('img'),
        div = document.createElement('div'),
        bigWorks = document.createElement('img');

    works.addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < container.length; i++) {
            if (event.target == container[i]) {

                div.classList.add('popup_img');
                bigWorks.src = works.getElementsByTagName('a')[i];
                bigWorks.classList.add('myimage');
                div.appendChild(bigWorks);
                works.appendChild(div);
                div.style.display = 'block';
            }
        }
    });

    div.addEventListener('click', function (event) {
        if (event.target == div) {
            div.style.display = 'none';
        }
    });
}
module.exports = work;