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
    /**
     * createImageData() Creates a new, blank ImageData object
     * getImageData(sx, sy, sw, sh)
       getImageData(sx, sy, sw, sh, settings)
     * Returns an ImageData object that copies that pixel data for the specified rectangle on canvas
     * putImageData(imageData, dx, dy)
       putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
     * Puts the image data (from a specified ImageData object) back onto the canvas
     */
    if (context) {
        var img_1 = new Image();
        img_1.src = 'amsterdam.jpg';
        img_1.onload = function () {
            context.drawImage(img_1, 180, 35);
            var imageData = context.getImageData(180, 35, 550, 366);
            // imageData의 data(Unit8ClampedArray)에는 {key:val} 숫자로 된 배열이 들어있는데
            // 각 key:val은 모두 하나의 픽셀의 rgba를 순서대로 나타내는 것
            // [{0:144, 1:191, 2:111, 3:...}] => 0:r, 1:g, 2:b, 3:a ...
            for (var i = 0; i < imageData.data.length; i += 4) {
                // average : black & white 필터값은 각 픽셀의r,g,b의 평균 값을 통해 구할 수 있다.
                var average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) /
                    3;
                imageData.data[i] = average; // Red
                imageData.data[i + 1] = average; // Green
                imageData.data[i + 2] = average; // Blue
                // imageData.data[i + 3] = 50; // Alpha
            }
            context.putImageData(imageData, 180, 35);
        };
    }
};
