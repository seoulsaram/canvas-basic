window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /* 
    context.rect(xCoordinate, yCoordinate, width, height)
    context.fillRect(xCoordinate, yCoordinate, width, height)
    context.strokeRect(xCoordinate, yCoordinate, width, height)
    context.clearRect(xCoordinate, yCoordinate, width, height)
*/

  if (context) {
    // rect
    context.strokeStyle = 'red';
    context.lineWidth = 11;
    context.lineJoin = 'round';
    context.fillStyle = 'blue';
    context.rect(50, 200, 200, 200);
    context.stroke();
    context.fill();

    // fillRect
    context.fillStyle = 'green';
    context.fillRect(300, 200, 200, 200);

    // strokeRect
    context.lineWidth = 3;
    context.strokeStyle = 'blue';
    context.lineJoin = 'round';
    context.strokeRect(550, 200, 200, 200);

    // clearRect : 특정 사각형을 캔버스에서 삭제하는 함수. 캔버스를 clear할 때도 사용됨
    context.clearRect(0, 0, 800, 800);
  }
};
