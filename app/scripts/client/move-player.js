import { checkSpeed } from './check-speed';

export function movePlayer(player) {
  if (player.origin == 'left') {
    player.x -= player.speed;
  } else {
    player.speedLeft = checkSpeed(player.speedLeft);
    player.x -= player.speedLeft;
  }
  if (player.origin == 'top') {
    player.y -= player.speed;
  } else {
    player.speedTop = checkSpeed(player.speedTop);
    player.y -= player.speedTop;
  }
  if (player.origin == 'right') {
    player.x += player.speed;
  } else {
    player.speedRight = checkSpeed(player.speedRight);
    player.x += player.speedRight;
  }
  if (player.origin == 'down') {
    player.y += player.speed;
  } else {
    player.speedDown = checkSpeed(player.speedDown);
    player.y += player.speedDown;
  }
}