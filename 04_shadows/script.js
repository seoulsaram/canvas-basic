window.onload = function () {
  const canvas = document.getElementById('canvas');
  const context = canvas?.getContext('2d');

  /* 
Shadow attributes on canvas
- shadowColor 
- shadowOffsetX : 객체로부터의 그림자 거리
- shadowOffsetY : 객체로부터의 그림자 거리
- shadowBlur 
*/

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 20;
  context.shadowColor = 'black';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 5;
  context.moveTo(100, 60);
  context.lineTo(200, 60);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 20;
  context.shadowColor = 'gray';
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowBlur = 10;
  context.moveTo(350, 60);
  context.lineTo(450, 60);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 20;
  context.shadowColor = 'black';
  context.shadowOffsetX = -10;
  context.shadowOffsetY = -10;
  context.shadowBlur = 5;
  context.moveTo(100, 120);
  context.lineTo(200, 120);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 20;
  context.shadowColor = 'brown';
  context.shadowOffsetX = -5;
  context.shadowOffsetY = -5;
  context.shadowBlur = 10;
  context.moveTo(350, 120);
  context.lineTo(450, 120);
  context.stroke();
};
