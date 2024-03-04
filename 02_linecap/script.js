window.onload = function () {
  const canvas = document.getElementById('canvas');
  const context = canvas?.getContext('2d');

  /* 
  Line Caps => context.lineCap "";
  - butt -> default
  - round
  - square
*/

  context.beginPath();
  context.lineCap = 'butt';
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.moveTo(50, 50);
  context.lineTo(200, 50);
  context.stroke();

  context.beginPath();
  context.lineCap = 'round';
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.moveTo(50, 75);
  context.lineTo(200, 75);
  context.stroke();

  context.beginPath();
  context.lineCap = 'square';
  context.strokeStyle = 'green';
  context.lineWidth = 10;
  context.moveTo(50, 100);
  context.lineTo(200, 100);
  context.stroke();
};
