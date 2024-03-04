window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /* 
    context.textAlign = center | end | left | right | start;
    - 텍스트가 가로로 정렬 되는 방식을 정의. default는 start

    context.textBaseline = alphabetic | top | hanging | middle | ideographic | bottom;
    - 텍스트가 수직으로 정렬되는 방식을 정의. default는 alphabetic
  */

  if (context) {
    context.strokeStyle = 'red';
    context.moveTo(300, 20);
    context.lineTo(300, 420);
    context.stroke();

    // Define a style
    context.font = 'italic 400 18px monospace';

    // Apply textAlign
    context.textAlign = 'start';
    context.fillText('start', 300, 20);

    context.textAlign = 'center';
    context.fillText('center', 300, 60);

    context.textAlign = 'left';
    context.fillText('left', 300, 100);

    context.textAlign = 'end';
    context.fillText('end', 300, 140);

    context.textAlign = 'right';
    context.fillText('right', 300, 180);

    context.strokeStyle = 'red';
    context.moveTo(20, 300);
    context.lineTo(588, 300);
    context.stroke();

    // Apply textBaseline
    context.textBaseline = 'alphabetic';
    context.fillText('alphabetic', 120, 300);

    context.textBaseline = 'top';
    context.fillText('top', 180, 300);

    context.textBaseline = 'hanging';
    context.fillText('hanging', 300, 300);

    context.textBaseline = 'middle';
    context.fillText('middle', 380, 300);

    context.textBaseline = 'ideographic';
    context.fillText('ideographic', 510, 300);

    context.textBaseline = 'bottom';
    context.fillText('bottom', 600, 300);
  }
};
