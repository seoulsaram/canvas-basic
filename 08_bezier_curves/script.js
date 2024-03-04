window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /*
     bezier curve는 cubic curve라고도 부름
     quadraticCurveTo와 bezierCurveTo 차이는 bezierCurveTo는 두 개의 control point를 인자로 받는다.
     bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
    */
    if (context) {
        context.beginPath();
        context.strokeStyle = 'red';
        context.lineWidth = 10;
        context.moveTo(200, 250); // start point
        context.bezierCurveTo(200, 10, 50, 150, 400, 250);
        context.stroke();
    }
};
