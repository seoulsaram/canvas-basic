window.onload = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas?.getContext('2d');

  if (context) {
    const img = new Image();
    img.src = 'amsterdam.jpg';
    img.onload = () => {
      context.drawImage(img, 180, 35);

      const imageData = context.getImageData(180, 35, 550, 366);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const average =
          (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) /
          3;
        imageData.data[i] = average; // Red
        imageData.data[i + 1] = average; // Green
        imageData.data[i + 2] = average; // Blue
        // imageData.data[i + 3] = 50; // Alpha
      }

      context.putImageData(imageData, 180, 35);

      // Save canvas image as data url (default : PNG)
      const dataURL = canvas.toDataURL();
      const targetImgTag = document.getElementById(
        'canvasImg'
      ) as HTMLImageElement;
      if (targetImgTag) {
        targetImgTag.src = dataURL;
      }
    };
  }
};
