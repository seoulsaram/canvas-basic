window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * 5각형 그리기
     * 각 반지름 사이의 앵글은 360rad / 5
     * 즉 (2 * Math.PI) / edge count
     * centerX + radius * Math.cos(⍺ + 2 * angle)
     * centerY - radius * Math.sin(⍺ + 2 * angle)
     * 필요한 정보 : centerX, centerY, startAngle, radius
     */
    var sides = 5; // 각의 수
    var radius = 100; // 반지름
    var centerX = 200;
    var centerY = 500;
    var startAngle = 180;
    var angle = (2 * Math.PI) / sides;
    if (context) {
        context.beginPath();
        context.strokeStyle = 'red';
        context.lineWidth = 5;
        context.lineJoin = 'round';
        var beginX = centerX + radius * Math.cos(startAngle);
        var beginY = centerY - radius * Math.sin(startAngle);
        context.moveTo(beginX, beginY);
        for (var i = 0; i < sides; i++) {
            var currentAngle = startAngle + i * angle;
            var currentPointX = centerX + radius * Math.cos(currentAngle);
            var currentPointY = centerY - radius * Math.sin(currentAngle);
            context.lineTo(currentPointX, currentPointY);
        }
        context.closePath(); // to close paths manually
        context.stroke();
    }
};
