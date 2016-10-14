export function checkBorders(arr) {
  arr.forEach((item) => {
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