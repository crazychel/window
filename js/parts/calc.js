function calc() {
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
}

module.exports = calc;