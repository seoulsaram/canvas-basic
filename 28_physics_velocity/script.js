window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * What is velocity?
     * the rate of change in an object's position.
     * has a magnitude (speed) and a direction.
     * is a vector quantity.
     * => 크기와 방향을 동시에 나타네는 물리량
     * 단위시간 동안에 움직인 위치변화. 방향성을 가짐
     * is represented by the formula :
     * 시간 / 이동 변위
     *
     */
    var ball = new Ball(30, 'purple');
    ball.x = 100;
    ball.y = 150;
    ball.context = context;
    ball.draw();
    window.requestAnimationFrame(animationLoop);
    // Velocity (움직이는 방향과 속도를 정함)
    ball.vx = 5;
    ball.vy = 5;
    function animationLoop() {
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Update
            ball.x = ball.x + ball.vx;
            ball.y = ball.y + ball.vy;
            // Draw
            ball.draw();
            // Animate
            window.requestAnimationFrame(animationLoop);
        }
    }
    window.requestAnimationFrame = (function () {
        return (window.requestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });
    })();
};
