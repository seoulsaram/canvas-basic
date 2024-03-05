window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
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
        var img_1 = new Image();
        img_1.src = 'pokemons.png';
        img_1.onload = function () {
            // 피카츄
            context.drawImage(img_1, 0, 0, 200, 200, 0, 0, 200, 200);
            // 스퀴틀
            context.drawImage(img_1, 400, 180, 200, 200, 200, 0, 200, 200);
            // 바바살
            context.drawImage(img_1, 1000, 0, 200, 200, 400, 0, 200, 200);
        };
    }
};
