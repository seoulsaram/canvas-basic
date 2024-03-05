window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * context.rotate(rotationAmount) -> Rotate the canvas context
     * rotationAmount (radian) : The angle amount of rotation
     */
    var radian = Math.PI / 180;
    if (context) {
        context.rotate(360 * radian);
        context.fillStyle = 'red';
        context.fillRect(250, 250, 400, 160);
        context.fill();
    }
};
