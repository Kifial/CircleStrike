export function setPlayerSpeed(player) {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
      player.speedLeft = player.speed / 10;
      player.origin = 'left';
      for (let i = 0; i < 9; i ++) {
        setTimeout(() => {
          player.speedLeft += player.speed / 10;
        }, 20);
      };
    }
    if (event.keyCode == 38) {
      player.speedTop = player.speed / 10;
      player.origin = 'top';
      for (let i = 0; i < 9; i ++) {
        setTimeout(() => {
          player.speedTop += player.speed / 10;
        }, 20);
      };
    }
    if (event.keyCode == 39) {
      player.speedRight = player.speed / 10;
      player.origin = 'right';
      for (let i = 0; i < 9; i ++) {
        setTimeout(() => {
          player.speedRight += player.speed / 10;
        }, 20);
      };
    }
    if (event.keyCode == 40) {
      player.speedDown = player.speed / 10;
      player.origin = 'down';
      for (let i = 0; i < 9; i ++) {
        setTimeout(() => {
          player.speedDown += player.speed / 10;
        }, 20);
      };
    }

    console.log(player);
  });
};