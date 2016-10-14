(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function Circle() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#fff';

  _classCallCheck(this, Circle);

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
};

},{}],2:[function(require,module,exports){
'use strict';

var _circle = require('./circle');

var canvas = document.getElementById('canvas');
var viewport = {};
viewport.width = window.innerWidth;
viewport.height = window.innerHeight;

canvas.width = viewport.width;
canvas.height = viewport.height;

var ctx = canvas.getContext('2d');
ctx.beginPath();

ctx.fillStyle = "rgb(200,0,0)";

var player = (0, _circle.Circle)(viewport.width / 2, viewport.height / 2, 20, '#f00');

ctx.fillStyle = player.color;
ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2, true);
ctx.fill();

},{"./circle":1}]},{},[2]);
