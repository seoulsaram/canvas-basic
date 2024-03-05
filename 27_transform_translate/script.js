window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    /**
     * context.transform(m11, m12, m21, m22, dx, dy)
     * m11 : 가로 스케일링
     * m12 : 가로 외곡(skewing)
     * m21 : 세로 외곡
     * m22 : 세로 스케일링
     * dx : 가로 이동
     * dy : 세로 이동
     *
     * examples
     * transform(sx, 0, 0, sy, 0, 0) === scale(sx, sy)
     * transform(cosα, sinα, -sinα, -cosα, 0, 0) === rotate(α)
     * transform(1, 0, 0, 1, x, y) === translate(x,y)
     * transform(1, x, y, 1, 0, 0) === skew(x,y)
     *
     * setTransform(m11, m12, m21, m22, dx, dy) -> 초기값에서 인자로 받은 값을 세팅함
     * transform 함수는 이전 context에서 인자로 받은 값을 세팅하기 때문에 사용할 때마다 이전 값에서 더해짐
     * resetTransform() -> 현재 matrix를 identity matrix로 리셋함
     * resetTransform() === setTransform(1,0,0,1,0,0)
     *
     */
    var radian = Math.PI / 180;
    if (context) {
        context.fillStyle = 'red';
        context.fillRect(150, 150, 200, 100);
        context.fill();
        // Scale Transform
        context.setTransform(1.5, 0, 0, 1.5, 0, 0);
        context.fillStyle = 'blue';
        context.fillRect(150, 150, 200, 100);
        context.fill();
        context.setTransform(1.5, 0, 0, 1.5, 0, 0);
        context.fillStyle = 'green';
        context.fillRect(150, 150, 200, 100);
        context.fill();
        context.resetTransform();
        context.fillStyle = 'purple';
        context.fillRect(150, 150, 200, 100);
        context.fill();
    }
};
