import { movePlayer } from './move-player';
import { checkBorders } from './check-borders';

export function drawAll(player, arr, context) {
  var mainInterval = setInterval(() => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    movePlayer(player);
    checkBorders(arr);
    arr.forEach((item) => {
      item.draw(context);
    });
  },20);
}