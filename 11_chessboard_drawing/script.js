window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (context) {
        // Frame
        context.strokeStyle = 'black';
        context.strokeRect(250, 100, 400, 400);
        var x = 200;
        var y = 50;
        // Cell 1
        for (var i = 0; i < 8; i++) {
            y += 50;
            x = 200;
            for (var j = 0; j < 8; j++) {
                var isOdd = (i + j) % 2 !== 0;
                x += 50;
                drawCell(x, y, isOdd ? true : false, context);
            }
        }
    }
};
function drawCell(x, y, isOdd, context) {
    var lightCellColor = '#ddb180';
    var darkCellColor = '#7c330c';
    context.fillStyle = isOdd ? darkCellColor : lightCellColor;
    context.fillRect(x, y, 50, 50);
}
