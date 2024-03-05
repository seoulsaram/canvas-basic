window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * context.createLinearGradient(x1, y1, x2, y2)
     * context.createRadialGradient(x1, y1, r1, x2, y2, r2)
     * r1 : radius가 시작되는 포인트
     * r2 : radius가 끝나는 포인트
     */
    if (context) {
        var linearGradient = context.createLinearGradient(240, 40, 440, 240);
        // gradient.addColorStop(stop, color)
        // stop : 0~1 사이 값을 받는다. 그래디언트의 시작/끝 지점을 대표한다.
        linearGradient.addColorStop(0, 'red');
        linearGradient.addColorStop(0.5, 'blue');
        linearGradient.addColorStop(1, 'white');
        context.strokeStyle = 'blue';
        context.lineWidth = 4;
        context.fillStyle = linearGradient;
        context.rect(240, 40, 200, 200);
        context.stroke();
        context.fill();
        var radialGradient = context.createRadialGradient(440, 500, 30, 440, 500, 700);
        radialGradient.addColorStop(0, 'red');
        radialGradient.addColorStop(0.5, 'blue');
        radialGradient.addColorStop(1, 'white');
        context.strokeStyle = 'red';
        context.lineWidth = 4;
        context.fillStyle = radialGradient;
        context.rect(240, 300, 400, 400);
        context.stroke();
        context.fill();
    }
};
