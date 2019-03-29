window.addEventListener('DOMContentLoaded', function () {
    // timer
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

    let engineer = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close');

    function formEng() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    engineer.addEventListener('click', formEng);

    close[1].addEventListener('click', () => {
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

    let massage = {
            loading: 'Идет отправка',
            success: 'Отправлено!',
            failure: 'Ошибка!'
        },
        form = document.querySelectorAll('.form'),
        img = document.createElement('img'),
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
                    statusMassage.innerHTML = massage.success;
                    item.getElementsByTagName('input')[0].style.display = 'none';
                    item.getElementsByTagName('input')[1].style.display = 'none';
                    item.getElementsByTagName('button')[0].innerHTML = 'Спасибо';
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

            }
        }

        function getChar(event) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which)
        }
        inputphone(item.getElementsByTagName('input')[1]);
    });




});