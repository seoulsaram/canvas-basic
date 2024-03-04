window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /* 
   bezier curve는 cubic curve라고도 부름
   quadraticCurveTo와 bezierCurveTo 차이는 bezierCurveTo는 두 개의 control point를 인자로 받는다.
   bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
  */
  /* 
   quadraticCurveTo(controlX, controlY, endX, endY) : 원형 형태의 곡선이 아닌 더 자유로운 형태의 곡선을 그리기 위한 함수
   controlX : control point의 x좌표
   controlY : control point의 y좌표
  */

  if (context) {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.moveTo(430, 130);
    context.bezierCurveTo(470, 10, 670, 10, 670, 180);
    context.quadraticCurveTo(670, 380, 430, 520);
    context.quadraticCurveTo(190, 380, 190, 180);
    context.bezierCurveTo(190, 10, 400, 10, 430, 130);
    context.stroke();
  }
};
