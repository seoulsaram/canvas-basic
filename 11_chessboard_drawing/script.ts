window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  if (context) {
    // Frame
    context.strokeStyle = 'black';
    context.strokeRect(250, 100, 400, 400);

    let x = 200;
    let y = 50;

    // Cell 1
    for (let i = 0; i < 8; i++) {
      y += 50;
      x = 200;
      for (let j = 0; j < 8; j++) {
        const isOdd = (i + j) % 2 !== 0;
        x += 50;
        drawCell(x, y, isOdd ? true : false, context);
      }
    }
  }
};

function drawCell(
  x: number,
  y: number,
  isOdd: boolean,
  context: CanvasRenderingContext2D
) {
  const lightCellColor = '#ddb180';
  const darkCellColor = '#7c330c';
  context.fillStyle = isOdd ? darkCellColor : lightCellColor;
  context.fillRect(x, y, 50, 50);
}
