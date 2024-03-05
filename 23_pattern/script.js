window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * context.createPattern(image, repetition)
     * repetition :
     * - repeat : both directions
     * - repeat-x : horizontal only
     * - repeat-y : vertical only
     * - no-repeat : neither
     */
    if (context) {
        var patternImg_1 = new Image();
        patternImg_1.src = 'apple.png';
        patternImg_1.onload = function () {
            var pattern = context.createPattern(patternImg_1, 'repeat');
            context.fillStyle = pattern;
            context.fillRect(0, 0, 900, 450);
        };
    }
};
