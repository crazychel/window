window.addEventListener('DOMContentLoaded', function () {

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
});