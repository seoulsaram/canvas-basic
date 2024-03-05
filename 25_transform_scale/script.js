window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * context.scale(horizontalScaleFactor, verticalScaleFactor) -> Scales the canvas context
     * horizontalScaleFactor (double): Scales the width of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
     * verticalScaleFactor (double): Scales the height of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
     *
     * scale(2,2) => 캔버스의 left, top을 기준으로 두배 커진다.
     */
    if (context) {
        context.fillStyle = 'red';
        context.fillRect(250, 250, 400, 160);
        context.fill();
        // Scale
        context.scale(0.5, 0.5);
        context.fillStyle = 'blue';
        context.fillRect(250, 250, 400, 160);
        context.fill();
        context.scale(0.5, 0.5);
        context.fillStyle = 'green';
        context.fillRect(250, 250, 400, 160);
        context.fill();
    }
};
