window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /**
   * context.rotate(rotationAmount) -> Rotate the canvas context
   * rotationAmount (radian) : The angle amount of rotation
   */

  const radian = Math.PI / 180;

  if (context) {
    context.rotate(360 * radian);

    context.fillStyle = 'red';
    context.fillRect(250, 250, 400, 160);
    context.fill();
  }
};
