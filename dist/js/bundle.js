/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  'use strict';

  var openCalc = document.querySelectorAll('.glazing_price_btn'),
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
      var chr = getChar(e);

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

  function checkinput(input) {}

  var formBalcony = 'Тип1';
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
      var selection;

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

  function clearInput() {
    var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    form.querySelectorAll('input').forEach(function (item) {
      item.value = '';
      select.selectedIndex = 0;
    });
  }

  clearInput();
  var massage = {
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
      var formData = new FormData(item);
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      formData.forEach(function (value, key) {
        calcObj[key] = value;
      });
      var json = JSON.stringify(calcObj);
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
        var chr = getChar(e);

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

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  'use strict';

  var engineer = document.querySelector('.header_btn'),
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
  setTimeout(function () {
    popupCall.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, 60000);
  var callBtn = document.querySelectorAll('.phone_link'),
      popupCall = document.querySelector('.popup');

  function formCall(event) {
    popupCall.style.display = 'block';
    document.body.style.overflow = 'hidden';
    event.preventDefault();
  }

  for (var i = 0; i < 2; i++) {
    callBtn[i].addEventListener('click', formCall);
  }

  close[0].addEventListener('click', function () {
    popupCall.style.display = 'none';
    document.body.style.overflow = '';
  });
  back(popupCall);
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/tabs balcony.js":
/*!**********************************!*\
  !*** ./js/parts/tabs balcony.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs_balcony() {
  'use strict';

  var menu = document.querySelector('.decoration_slider'),
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

        for (var i = 0; i < mass.length; i++) {
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

/***/ }),

/***/ "./js/parts/tabs window.js":
/*!*********************************!*\
  !*** ./js/parts/tabs window.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs_window() {
  'use strict';

  var menuGlaz = document.querySelector('.glazing_slider'),
      tabGlaz = document.querySelectorAll('.glazing_block'),
      tabContent = document.querySelectorAll('.glazing .container .row');
  menuGlaz.addEventListener('click', function (event) {
    tabGlaz.forEach(function (item) {
      if (event.target && event.target.classList.contains('glazing_block') || item.children[1] || item.children[0]) {
        tabGlaz.forEach(function (items) {
          items.children[1].classList.remove('active');
        });
        event.target.classList.add('active');

        for (var i = 0; i < tabContent.length; i++) {
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

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  'use strict';

  var deadline = '2019-04-05';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        days = Math.floor(t / 1000 / 60 / 60 / 24);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);

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
}

module.exports = timer;

/***/ }),

/***/ "./js/parts/work.js":
/*!**************************!*\
  !*** ./js/parts/work.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function work() {
  'use strict';

  var works = document.querySelector('.works'),
      container = works.getElementsByTagName('img'),
      div = document.createElement('div'),
      bigWorks = document.createElement('img');
  works.addEventListener('click', function (event) {
    event.preventDefault();

    for (var i = 0; i < container.length; i++) {
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

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

window.addEventListener('DOMContentLoaded', function () {
  'use srict';

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js"),
      // form = require('./parts/form.js'),
  tabs_balcony = __webpack_require__(/*! ./parts/tabs balcony.js */ "./js/parts/tabs balcony.js"),
      tabs_window = __webpack_require__(/*! ./parts/tabs window.js */ "./js/parts/tabs window.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js"),
      work = __webpack_require__(/*! ./parts/work.js */ "./js/parts/work.js");

  calc(); // form();

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

/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){};n.Symbol||(n.Symbol=r)}var r=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function u(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(l(this))}});u=function(){}}function v(a){u();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={s:!0},B={};try{B.__proto__=A;z=B.s;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=y;function D(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.u=0;this.g=null}function E(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}D.prototype.i=function(a){this.o=a};
D.prototype.j=function(a){this.g={v:a,w:!0};this.b=this.u||this.m};D.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function F(a,b,e){a.b=e;return{value:b}}function G(a){this.A=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function H(a){this.a=new D;this.B=a}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.i);this.a.i(a);return J(this)};
function K(a,b){E(a.a);var e=a.a.c;if(e)return I(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.j=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return J(this)};
function I(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.h=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.j(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.B(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(e){a.a.o=void 0,a.a.j(e)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.w)throw b.v;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return K(a,b)};u();this[Symbol.iterator]=function(){return this}}function M(a,b){var e=new L(new H(b));C&&C(e,a.prototype);return e}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var N=function(a,b){for(var e=0;e<a.length;e++)b(a[e])},O=function(a,b,e){return b instanceof Blob?[String(a),b,void 0!==e?e+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},Q=function(a){var b=x(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},R="object"===typeof window?window:"object"===typeof self?self:this,S=R.FormData,T=R.XMLHttpRequest&&R.XMLHttpRequest.prototype.send,U=R.Request&&R.fetch,V=R.navigator&&R.navigator.sendBeacon;p();var W=R.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in R&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){R.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(b,
{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}p();u();var X=function(a){this.f=Object.create(null);if(!a)return this;var b=this;N(a.elements,function(a){if(a.name&&!a.disabled&&"submit"!==a.type&&"button"!==a.type)if("file"===a.type){var c=a.files&&a.files.length?a.files:[new File([],"",{type:"application/octet-stream"})];N(c,function(c){b.append(a.name,c)})}else"select-multiple"===
a.type||"select-one"===a.type?N(a.options,function(c){!c.disabled&&c.selected&&b.append(a.name,c.value)}):"checkbox"===a.type||"radio"===a.type?a.checked&&b.append(a.name,a.value):(c="textarea"===a.type?a.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):a.value,b.append(a.name,c))})};k=X.prototype;k.append=function(a,b,e){P(arguments,2);var c=x(O.apply(null,arguments));a=c.next().value;b=c.next().value;e=c.next().value;c=this.f;c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){P(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var e=this,c,d,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=e.f,f=new G(c);case 2:var t;a:{for(t=f;0<t.l.length;){var w=t.l.pop();if(w in t.A){t=w;break a}}t=null}if(null==(d=t)){b.b=0;break}g=x(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[d,Q(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){P(arguments,1);for(var c=x(this),d=c.next();!d.done;d=c.next()){var f=x(d.value);d=f.next().value;f=f.next().value;
b.call(e,f,d,this)}};k.get=function(b){P(arguments,1);var e=this.f;b=String(b);return e[b]?Q(e[b][0]):null};k.getAll=function(b){P(arguments,1);return(this.f[String(b)]||[]).map(Q)};k.has=function(b){P(arguments,1);return String(b)in this.f};k.keys=function e(){var c=this,d,f,g,h,q;return M(e,function(e){1==e.b&&(d=x(c),f=d.next());if(3!=e.b){if(f.done){e.b=0;return}g=f.value;h=x(g);q=h.next().value;return F(e,q,3)}f=d.next();e.b=2})};k.set=function(e,c,d){P(arguments,2);var f=O.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function c(){var d=this,f,g,h,q,w;return M(c,function(c){1==c.b&&(f=x(d),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=x(h);q.next();w=q.next().value;return F(c,w,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=new S,d=x(this),f=d.next();!f.done;f=d.next()){var g=x(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=x(this),g=f.next();!g.done;g=
f.next()){var h=x(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
W&&(X.prototype[W]="FormData");T&&(R.XMLHttpRequest.prototype.send=function(c){c instanceof X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),T.call(this,c)):T.call(this,c)});if(U){var Y=R.fetch;R.fetch=function(c,d){d&&d.body&&d.body instanceof X&&(d.body=d.body._blob());return Y.call(this,c,d)}}V&&(R.navigator.sendBeacon=function(c,d){d instanceof X&&(d=d._asNative());return V.call(this,c,d)});R.FormData=X};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map