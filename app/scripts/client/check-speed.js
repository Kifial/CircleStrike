export function checkSpeed(speed) {
  if (speed) {
    if (speed < 0) {
      speed = 0;
    } else {
      speed -= speed / 20;
    }
  }
  return speed;
}