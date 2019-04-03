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
        select = document.querySelector('#view_type'),
        chbox = document.querySelectorAll('.checkbox'),
        closeProfile = document.querySelector('.popup_calc_profile_close'),
        btnNextProfile = document.querySelector('.popup_calc_profile_button'),
        calcEnd = document.querySelector('.popup_calc_end'),
        closeEnd = document.querySelector('.popup_calc_end_close'),
        sendForm = calcEnd.getElementsByTagName('form')[0],
        calcObj = {};

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
        calcObj = {};
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

    function checkinput(input) {

    }

    let formBalcony = 'Тип1';

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

            formBalcony = event.target.alt;
            return formBalcony;
        });

    });

    btnNext.addEventListener('click', function () {
        if (inputCalc[0].value != null && inputCalc[0].value != '' && inputCalc[1].value != null && inputCalc[1].value != '') {
            popupCalc.style.display = 'none';
            calcProfile.style.display = 'block';
            calcObj = {
                'Форма балкона': formBalcony,
                'Ширина': inputCalc[0].value,
                'Высота': inputCalc[1].value
            };
        }
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
        calcObj = {};
    });

    btnNextProfile.addEventListener('click', function () {
        if (chbox[0].checked == true || chbox[1].checked == true) {
            calcProfile.style.display = 'none';
            calcEnd.style.display = 'block';

            let selection;
            if (chbox[0]) {
                selection = chbox[0].parentElement.getElementsByTagName('span')[1].textContent;
            } else {
                selection = chbox[1].parentElement.getElementsByTagName('span')[1].textContent;
            }
            calcObj['Тип остекления'] = select.value;
            calcObj['Профиль'] = selection;
            statusMassage.innerHTML = '';
        }
    });

    inputphone(document.querySelector('.popup_calc_end').getElementsByTagName('input')[1]);

    closeEnd.addEventListener('click', function () {
        calcEnd.style.display = 'none';
        document.body.style.overflow = '';
        calcObj = {};
    });

    function clearInput(form = document) {
        form.querySelectorAll('input').forEach(function (item) {
            item.value = '';
            select.selectedIndex = 0;
        });
    }
    clearInput();

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


            formData.forEach(function (value, key) {
                calcObj[key] = value;
            });
            let json = JSON.stringify(calcObj);

            request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMassage.innerHTML = massage.loading;
                } else if (request.readyState == 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMassage.innerHTML = massage.success;
                        clearInput();
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

}


module.exports = calc;