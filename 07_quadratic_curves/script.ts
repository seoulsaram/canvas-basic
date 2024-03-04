window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');
  /* 
   quadraticCurveTo(controlX, controlY, endX, endY) : 원형 형태의 곡선이 아닌 더 자유로운 형태의 곡선을 그리기 위한 함수
   controlX : control point의 x좌표
   controlY : control point의 y좌표
  */

  if (context) {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    /* 
    start point는 moveTo의 좌표가 되고
    endpoint는 quadraticCurveTo의 400, 250이 된다.
    */
    context.moveTo(200, 250);
    context.quadraticCurveTo(300, 150, 400, 250);
    context.stroke();
  }
};
