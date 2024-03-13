window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /**
   * What is acceleration?
   * the rate of change of velocity of an object with respect to time
   * is a vector quantity.
   * => 크기와 방향을 동시에 나타내는 물리량
   * 단위시간 동안에 움직인 위치변화. 방향성을 가짐
   * is represented by the formula :
   * 시간 / 이동 변위
   *
   */

  const ball = new Ball(20, 'green');
  ball.x = 100;
  ball.y = 150;
  ball.context = context;
  ball.draw();

  window.requestAnimationFrame(animationLoop);

  // Velocity (움직이는 방향과 속도를 정함)
  ball.vx = 1;
  ball.vy = -1;

  // Acceleration
  const ax = 0.05;
  const ay = 0.005;

  function animationLoop() {
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update
      // X
      // ball.vx = ball.vx + ax;
      // ball.x = ball.x + ball.vx;

      // Y
      ball.vy = ball.vy + ay;
      ball.y = ball.y + ball.vy;

      // Draw
      ball.draw();

      // Animate
      window.requestAnimationFrame(animationLoop);
    }
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};
