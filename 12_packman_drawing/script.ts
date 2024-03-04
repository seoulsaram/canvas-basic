window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  const radian = Math.PI / 180;
  if (context) {
    // First way : 선을 연결해서 만드는 방식
    // Body
    context.beginPath();
    context.strokeStyle = 'orange';
    context.fillStyle = 'orange';
    context.moveTo(250, 250);
    context.lineTo(330, 310);
    context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
    context.lineTo(250, 250);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(250, 200, 10, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();

    // Second way : 반 원 두개를 겹치는 방식
    // Object 1
    context.beginPath();
    context.strokeStyle = 'orange';
    context.fillStyle = 'orange';
    context.arc(600, 250, 100, 143 * radian, 323 * radian, false);
    context.stroke();
    context.fill();

    //Object 2
    context.beginPath();
    context.strokeStyle = 'orange';
    context.fillStyle = 'orange';
    context.arc(600, 250, 100, 37 * radian, 217 * radian, false);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(600, 200, 10, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
  }
};
