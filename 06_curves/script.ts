window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');
  /* 
  arc(x,y, radius, startAngle, endAngle, counterClockWise)
  * angle값들은 degree가 아니라 radians다
  * radius : 반지름
  * counterClockWise : optional. arc의 방향을 정함 (false면 시계방향, true면 반시계 방향). default는 false
  */

  const radian = Math.PI / 180; // 1 라디안 = 180° / π
  if (context) {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.arc(100, 100, 50, 0 * radian, 360 * radian, false);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 10;
    context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
    context.stroke();
  }
};
