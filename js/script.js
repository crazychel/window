require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', function () {

  'use srict';
  let calc = require('./parts/calc.js'),
    form = require('./parts/form.js'),
    tabs_balcony = require('./parts/tabs balcony.js'),
    tabs_window = require('./parts/tabs window.js'),
    modal = require('./parts/modal.js'),
    timer = require('./parts/timer.js'),
    work = require('./parts/work.js');

  calc();
  form();
  tabs_balcony();
  tabs_window();
  timer();
  modal();
  work();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}