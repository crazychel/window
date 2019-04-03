window.addEventListener('DOMContentLoaded', function () {
    // timer
    'use strict';

    let deadline = '2019-04-05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / 1000 / 60 / 60 / 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function editTime(elem, key) {
                if (elem <= 0) {
                    elem = '00';
                } else {
                    if (elem < 10) {
                        elem = '0' + elem;
                    }
                }
                key.textContent = elem;
            }
            editTime(t.days, days);
            editTime(t.hours, hours);
            editTime(t.minutes, minutes);
            editTime(t.seconds, seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
    setClock('.timer', deadline);

    // Modal Engineer
    'use strict';

    let engineer = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close');

    function formEng() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    engineer.addEventListener('click', formEng);

    close[1].addEventListener('click', function () {
        popupEngineer.style.display = 'none';
        document.body.style.overflow = '';
    });

    function back(elem) {
        elem.addEventListener('click', function (event) {
            if (event.target == elem) {
                elem.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    back(popupEngineer);

    setTimeout(() => {
        popupCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);

    let callBtn = document.querySelectorAll('.phone_link'),
        popupCall = document.querySelector('.popup');

    function formCall(event) {
        popupCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
        event.preventDefault();
    }

    for (let i = 0; i < 2; i++) {
        callBtn[i].addEventListener('click', formCall);
    }

    close[0].addEventListener('click', () => {
        popupCall.style.display = 'none';
        document.body.style.overflow = '';
    });

    back(popupCall);


    // Form
    'use strict';

    let massage = {
            loading: 'Идет отправка',
            success: 'Отправлено!',
            failure: 'Ошибка!'
        },
        form = document.querySelectorAll('.form'),
        statusMassage = document.createElement('div');

    statusMassage.classList.add('status');

    form.forEach(function (item) {

        item.addEventListener('submit', function (event) {
            event.preventDefault();
            item.appendChild(statusMassage);

            let formData = new FormData(item);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMassage.innerHTML = massage.loading;
                } else if (request.readyState == 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMassage.innerHTML = massage.success;
                        item.getElementsByTagName('input')[0].value = '';
                        item.getElementsByTagName('input')[1].value = '';
                    }
                } else {
                    statusMassage.innerHTML = massage.failure;
                }
            });
        });

        function inputphone(input) {
            input.onkeypress = function (e) {
                e = e || event;

                let chr = getChar(e);

                if (chr >= '0' && chr <= '9' || chr == '+') {
                    return true;
                } else {
                    return false;
                }

            };
        }

        function getChar(event) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which);
        }
        inputphone(item.getElementsByTagName('input')[1]);
    });

    // Work
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

    // Tabs balcony
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

            if (event.target == item.children[0]) {

                tab.forEach(function (item) {
                    item.classList.remove('after_click');
                });
                event.target.parentElement.classList.add('after_click');

                for (let i = 0; i < mass.length; i++) {
                    mass[i].style.display = 'none';
                    if (event.target == tab[i].children[0]) {
                        mass[i].style.display = 'block';
                    }
                }
            }
        });
    });

    // Tabs window
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

    // Calc
    'use strict';

    let openCalc = document.querySelectorAll('.glazing_price_btn'),
        closeCalc = document.querySelector('.popup_calc_close'),
        popupCalc = document.querySelector('.popup_calc'),
        inputCalc = popupCalc.getElementsByTagName('input'),
        doMore = document.querySelectorAll('.balcon_icons img'),
        bigImg = document.querySelectorAll('.big_img img'),
        btnNext = document.querySelector('.popup_calc_button'),
        calcProfile = document.querySelector('.popup_calc_profile'),
        chbox = document.querySelectorAll('.checkbox'),
        closeProfile = document.querySelector('.popup_calc_profile_close'),
        btnNextProfile = document.querySelector('.popup_calc_profile_button'),
        calcEnd = document.querySelector('.popup_calc_end'),
        closeEnd = document.querySelector('.popup_calc_end_close'),
        sendForm = calcEnd.getElementsByTagName('form')[0],
        calc = {};

    openCalc.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            popupCalc.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeCalc.addEventListener('click', function () {
        popupCalc.style.display = 'none';
        document.body.style.overflow = '';
        calc = {};
    });

    function inputphone(input) {
        input.onkeypress = function (e) {
            e = e || event;

            let chr = getChar(e);

            if (chr >= '0' && chr <= '9' || chr == '+') {
                return true;
            } else {
                return false;
            }

        };
    }

    function getChar(event) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }

    inputphone(inputCalc[0]);
    inputphone(inputCalc[1]);

    doMore.forEach(function (item, key) {

        item.addEventListener('click', function (event) {
            event.preventDefault();

            doMore.forEach(function (item) {
                item.classList.remove('do_image_more');
            });
            event.target.classList.add('do_image_more');

            bigImg.forEach(function (item) {
                item.style.display = 'none';
                item.style.margin = 'auto';
            });
            bigImg[key].style.display = 'block';
        });

    });

    btnNext.addEventListener('click', function () {
        popupCalc.style.display = 'none';
        calcProfile.style.display = 'block';
        calc = {
            'Ширина': inputCalc[0].value,
            'Высота': inputCalc[1].value
        };
    });

    chbox[0].addEventListener('change', function () {
        chbox[1].checked = false;
    });

    chbox[1].addEventListener('change', function () {
        chbox[0].checked = false;
    });

    closeProfile.addEventListener('click', function () {
        calcProfile.style.display = 'none';
        document.body.style.overflow = '';
        calc = {};
    });

    btnNextProfile.addEventListener('click', function () {
        calcProfile.style.display = 'none';
        calcEnd.style.display = 'block';

        let selection;
        if (chbox[0]) {
            selection = chbox[0].parentElement.getElementsByTagName('span')[1].textContent;
        } else {
            selection = chbox[1].parentElement.getElementsByTagName('span')[1].textContent;
        }
        calc['Тип остекления'] = document.getElementById('view_type').value;
        calc['Профиль'] = selection;
    });

    inputphone(document.querySelector('.popup_calc_end').getElementsByTagName('input')[1]);

    closeEnd.addEventListener('click', function () {
        calcEnd.style.display = 'none';
        document.body.style.overflow = '';
        calc = {};
    });

    sendForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(sendForm);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        formData.forEach(function (value, key) {
            calc[key] = value;
        });

        let json = JSON.stringify(calc);
        request.send(json);

        calc = {};

        let status = document.createElement('div');
        status.classList.add('status');
        sendForm.appendChild(status);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                status.innerHTML = 'Идет отправка';
            } else if (request.readyState == 4) {
                if (request.status == 200 && request.status < 300) {
                    status.innerHTML = 'Отправлено!';
                    clearInput();
                }
            } else {
                status.innerHTML = 'Ошибка!';
            }
        });

    });

    function clearInput(form = document) {
        form.querySelectorAll('input').forEach(function (item) {
            item.value = '';
        });
    }
    clearInput();

});