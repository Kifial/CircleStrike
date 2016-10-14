import { Circle } from './circle';
import { drawAll } from './draw-all';
import { setPlayerSpeed } from './set-player-speed';

var canvas = document.getElementById('canvas');
var viewport = {};
viewport.width = window.innerWidth;
viewport.height = window.innerHeight;

canvas.width = viewport.width;
canvas.height = viewport.height;

var ctx = canvas.getContext('2d');
var circles = [];

var player = new Circle(viewport.width / 2, viewport.height / 2, 20, '#f00', 10);
circles.push(player);

setPlayerSpeed(player);
drawAll(player, circles, ctx);



