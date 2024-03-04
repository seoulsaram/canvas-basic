window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');
  if (context) {
    const text = 'This text will be in 3D';
    const style = 'normal 600 34px monospace';
    draw3DText(text, 100, 300, style, 'violet', 5);

    function draw3DText(
      text: string,
      x: number,
      y: number,
      style: string,
      color: string,
      size: number
    ) {
      if (!context) return;
      context.font = style;
      context.fillStyle = 'black';

      for (let i = 0; i < size; i++) {
        context?.fillText(text, x - i, y - i);
      }
      context.fillStyle = color;
      context.fillText(text, x, y);
    }
  }
};
