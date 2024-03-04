window.onload = function () {
  const canvas = document.getElementById('canvas');
  const context = canvas?.getContext('2d');

  /* 
  Line Joins => context.lineJoin = 'miter |bevel|round';
  연결된 선들의 꼭지점을 어떻게 처리할건지
*/

  context.beginPath();
  context.lineWidth = 20;
  context.lineJoin = 'round';
  context.moveTo(30, 30);
  context.lineTo(130, 30);
  context.lineTo(130, 130);
  context.lineTo(30, 130);
  context.lineTo(30, 230);
  context.stroke();
};
