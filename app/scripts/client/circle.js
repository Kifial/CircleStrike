export class Circle {
  constructor(x = 0, y = 0, radius = 0, color = '#fff', speed = 0, speedTop = 0, speedRight = 0, speedDown = 0, speedLeft = 0, origin = '') {
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
  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
}