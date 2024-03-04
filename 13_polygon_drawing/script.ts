window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /**
   * 5각형 그리기
   * 각 반지름 사이의 앵글은 360rad / 5
   * 즉 (2 * Math.PI) / edge count
   * centerX + radius * Math.cos(⍺ + 2 * angle)
   * centerY - radius * Math.sin(⍺ + 2 * angle)
   * 필요한 정보 : centerX, centerY, startAngle, radius
   */
  const sides = 5; // 각의 수
  const radius = 100; // 반지름
  const centerX = 200;
  const centerY = 500;
  const startAngle = 180;
  const angle = (2 * Math.PI) / sides;

  if (context) {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.lineJoin = 'round';

    const beginX = centerX + radius * Math.cos(startAngle);
    const beginY = centerY - radius * Math.sin(startAngle);

    context.moveTo(beginX, beginY);

    for (let i = 0; i < sides; i++) {
      const currentAngle = startAngle + i * angle;
      const currentPointX = centerX + radius * Math.cos(currentAngle);
      const currentPointY = centerY - radius * Math.sin(currentAngle);

      context.lineTo(currentPointX, currentPointY);
    }

    context.closePath(); // to close paths manually
    context.stroke();
  }
};
