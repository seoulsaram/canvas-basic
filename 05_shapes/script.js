window.onload = function () {
  const canvas = document.getElementById('canvas');
  const context = canvas?.getContext('2d');

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 15;
  context.lineCap = 'butt';
  context.lineJoin = 'miter';
  context.shadowColor = 'black';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.moveTo(60, 80);
  context.lineTo(160, 80);
  context.lineTo(80, 180);
  context.lineTo(180, 180);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.lineWidth = 15;
  context.shadowColor = 'black';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.moveTo(340, 80);
  context.lineTo(240, 80);
  context.lineTo(340, 180);
  context.lineTo(240, 180);
  context.stroke();

  context.beginPath();
  context.lineCap = 'square';
  context.lineJoin = 'bevel';
  context.strokeStyle = 'green';
  context.lineWidth = 15;
  context.shadowColor = 'black';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 20;
  context.moveTo(420, 80);
  context.lineTo(520, 80);
  context.lineTo(440, 180);
  context.lineTo(540, 180);
  context.stroke();
};
