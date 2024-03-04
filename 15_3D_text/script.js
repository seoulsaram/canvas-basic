window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (context) {
        var text = 'This text will be in 3D';
        var style = 'normal 600 34px monospace';
        draw3DText(text, 100, 300, style, 'violet', 5);
        function draw3DText(text, x, y, style, color, size) {
            if (!context)
                return;
            context.font = style;
            context.fillStyle = 'black';
            for (var i = 0; i < size; i++) {
                context === null || context === void 0 ? void 0 : context.fillText(text, x - i, y - i);
            }
            context.fillStyle = color;
            context.fillText(text, x, y);
        }
    }
};
