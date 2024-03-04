window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    // context.fillText(text, xCoord, yCoord, maxWidth);
    // context.strokeText(text, xCoord, yCoord, maxWidth)
    if (context) {
        context.font = '45px Verdana';
        var fText = 'Fill Text on Canvas';
        context.fillText(fText, 80, 100);
        var sText = 'Stroke Text on Canvas';
        context.strokeText(sText, 80, 200);
        // context.font = "font-style font-weight font-size font-family"
        // font-style :
        // normal, italic, oblique, inherit
        // font-weight :
        // normal, bold, bolder, lighter, inherit
        // 100 ~ 900
        // font-size :
        // xx-small, x-small, small, smaller, medium, large, larger, x-large, xx-large
        // exact number in px, pt, em
        // inherit
        // font-family :
        // family-name (like "times", "courier", "arial", ...)
        // generic-family (like "serif", "sans-serif", "cursive",..)
        // inherit
        var text = 'This text will be styled!';
        context.font = 'oblique bolder larger times';
        context.fillText(text, 100, 300);
        context.font = 'italic xx-large medium monospace';
        context.strokeText(text, 100, 400);
    }
};
