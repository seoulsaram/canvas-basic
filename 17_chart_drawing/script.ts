window.onload = function () {
  const min = 1;
  const max = 200;

  // Chart data
  const data = [
    { label: 'Jan', value: getRandomInt(min, max) },
    { label: 'Feb', value: getRandomInt(min, max) },
    { label: 'March', value: getRandomInt(min, max) },
    { label: 'April', value: getRandomInt(min, max) },
    { label: 'May', value: getRandomInt(min, max) },
  ];

  // Chart Specifications
  const targetId = 'chart';
  const canvasWidth = 600;
  const canvasHeight = 450;

  const chart = new BarChart({
    targetId,
    width: canvasWidth,
    height: canvasHeight,
    data,
  });

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  if (context) {
  }
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
