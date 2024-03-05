window.onload = function () {
  const min = 1;
  const max = 200;

  // Chart data
  const data = [
    { label: 'Jan', value: getRandomIntForData(min, max) },
    { label: 'Feb', value: getRandomIntForData(min, max) },
    { label: 'March', value: getRandomIntForData(min, max) },
    { label: 'April', value: getRandomIntForData(min, max) },
    { label: 'May', value: getRandomIntForData(min, max) },
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

function getRandomIntForData(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
