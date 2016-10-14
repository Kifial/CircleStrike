/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _circle = __webpack_require__(1);

	var _drawAll = __webpack_require__(2);

	var _setPlayerSpeed = __webpack_require__(6);

	var canvas = document.getElementById('canvas');
	var viewport = {};
	viewport.width = window.innerWidth;
	viewport.height = window.innerHeight;

	canvas.width = viewport.width;
	canvas.height = viewport.height;

	var ctx = canvas.getContext('2d');
	var circles = [];

	var player = new _circle.Circle(viewport.width / 2, viewport.height / 2, 20, '#f00', 10);
	circles.push(player);

	(0, _setPlayerSpeed.setPlayerSpeed)(player);
	(0, _drawAll.drawAll)(player, circles, ctx);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Circle = exports.Circle = function () {
	  function Circle() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#fff';
	    var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	    var speedTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	    var speedRight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	    var speedDown = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
	    var speedLeft = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
	    var origin = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';

	    _classCallCheck(this, Circle);

	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	    this.color = color;
	    this.speed = speed;
	    this.speedTop = speedTop;
	    this.speedRight = speedRight;
	    this.speedDown = speedDown;
	    this.speedLeft = speedLeft;
	    this.origin = origin;
	  }

	  _createClass(Circle, [{
	    key: 'draw',
	    value: function draw(context) {
	      context.beginPath();
	      context.fillStyle = this.color;
	      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	      context.fill();
	      context.closePath();
	    }
	  }]);

	  return Circle;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drawAll = drawAll;

	var _movePlayer = __webpack_require__(3);

	var _checkBorders = __webpack_require__(5);

	function drawAll(player, arr, context) {
	  var mainInterval = setInterval(function () {
	    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	    (0, _movePlayer.movePlayer)(player);
	    (0, _checkBorders.checkBorders)(arr);
	    arr.forEach(function (item) {
	      item.draw(context);
	    });
	  }, 20);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.movePlayer = movePlayer;

	var _checkSpeed = __webpack_require__(4);

	function movePlayer(player) {
	  if (player.origin == 'left') {
	    player.x -= player.speed;
	  } else {
	    player.speedLeft = (0, _checkSpeed.checkSpeed)(player.speedLeft);
	    player.x -= player.speedLeft;
	  }
	  if (player.origin == 'top') {
	    player.y -= player.speed;
	  } else {
	    player.speedTop = (0, _checkSpeed.checkSpeed)(player.speedTop);
	    player.y -= player.speedTop;
	  }
	  if (player.origin == 'right') {
	    player.x += player.speed;
	  } else {
	    player.speedRight = (0, _checkSpeed.checkSpeed)(player.speedRight);
	    player.x += player.speedRight;
	  }
	  if (player.origin == 'down') {
	    player.y += player.speed;
	  } else {
	    player.speedDown = (0, _checkSpeed.checkSpeed)(player.speedDown);
	    player.y += player.speedDown;
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkSpeed = checkSpeed;
	function checkSpeed(speed) {
	  if (speed) {
	    if (speed < 0) {
	      speed = 0;
	    } else {
	      speed -= speed / 20;
	    }
	  }
	  return speed;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.checkBorders = checkBorders;
	function checkBorders(arr) {
	  arr.forEach(function (item) {
	    if (item.x - item.radius <= 0) {
	      item.speedLeft = 0;
	      item.origin = '';
	    }
	    if (item.y - item.radius <= 0) {
	      item.speedTop = 0;
	      item.origin = '';
	    }
	    if (item.x + item.radius >= window.innerWidth) {
	      item.speedRight = 0;
	      item.origin = '';
	    }
	    if (item.y + item.radius >= window.innerHeight) {
	      item.speedDown = 0;
	      item.origin = '';
	    }
	  });
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setPlayerSpeed = setPlayerSpeed;
	function setPlayerSpeed(player) {
	  document.addEventListener('keydown', function (event) {
	    if (event.keyCode == 37) {
	      player.speedLeft = player.speed / 10;
	      player.origin = 'left';
	      for (var i = 0; i < 9; i++) {
	        setTimeout(function () {
	          player.speedLeft += player.speed / 10;
	        }, 20);
	      };
	    }
	    if (event.keyCode == 38) {
	      player.speedTop = player.speed / 10;
	      player.origin = 'top';
	      for (var _i = 0; _i < 9; _i++) {
	        setTimeout(function () {
	          player.speedTop += player.speed / 10;
	        }, 20);
	      };
	    }
	    if (event.keyCode == 39) {
	      player.speedRight = player.speed / 10;
	      player.origin = 'right';
	      for (var _i2 = 0; _i2 < 9; _i2++) {
	        setTimeout(function () {
	          player.speedRight += player.speed / 10;
	        }, 20);
	      };
	    }
	    if (event.keyCode == 40) {
	      player.speedDown = player.speed / 10;
	      player.origin = 'down';
	      for (var _i3 = 0; _i3 < 9; _i3++) {
	        setTimeout(function () {
	          player.speedDown += player.speed / 10;
	        }, 20);
	      };
	    }

	    console.log(player);
	  });
	};

/***/ }
/******/ ]);