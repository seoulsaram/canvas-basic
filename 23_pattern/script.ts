window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /**
   * context.createPattern(image, repetition)
   * repetition :
   * - repeat : both directions
   * - repeat-x : horizontal only
   * - repeat-y : vertical only
   * - no-repeat : neither
   */

  if (context) {
    const patternImg = new Image();
    patternImg.src = 'apple.png';

    patternImg.onload = () => {
      const pattern = context.createPattern(patternImg, 'repeat');
      context.fillStyle = pattern!;
      context.fillRect(0, 0, 900, 450);
    };
  }
};
