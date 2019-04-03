function form() {
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

module.exports = form;