window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  /**
   * drawImage(img, dx, dy)
   * drawImage(img, dx, dy, dw, dh)
   * drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh) => 이미지를 자르고, 해당 이미지를 x,y좌표에 width, height만큼 위치시킴
   * dx : 이미지가 시작되는 x좌표
   * dy : 이미지가 시작되는 y좌표
   * dw : width
   * dh : height
   * sx : clip을 시작 할 이미지 내부의 x좌표
   * sy : clip을 시작 할 이미지 내부의 y좌표
   * sw : clip할 width
   * sh : clip할 height
   */

  if (context) {
    const img = new Image();
    img.src = 'pokemons.png';
    img.onload = () => {
      // 피카츄
      context.drawImage(img, 0, 0, 200, 200, 0, 0, 200, 200);

      // 스퀴틀
      context.drawImage(img, 400, 180, 200, 200, 200, 0, 200, 200);

      // 바바살
      context.drawImage(img, 1000, 0, 200, 200, 400, 0, 200, 200);
    };
  }
};
