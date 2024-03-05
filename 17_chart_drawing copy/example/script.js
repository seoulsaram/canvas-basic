window.onload = function () {
    var min = 1;
    var max = 200;
    // Chart data
    var data = [
        { label: 'Jan', value: getRandomInt(min, max) },
        { label: 'Feb', value: getRandomInt(min, max) },
        { label: 'March', value: getRandomInt(min, max) },
        { label: 'April', value: getRandomInt(min, max) },
        { label: 'May', value: getRandomInt(min, max) },
    ];
    // Chart Specifications
    var targetId = 'chart';
    var canvasWidth = 600;
    var canvasHeight = 450;
    var chart = new BarChart({
        targetId: targetId,
        width: canvasWidth,
        height: canvasHeight,
        data: data,
    });
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (context) {
    }
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
